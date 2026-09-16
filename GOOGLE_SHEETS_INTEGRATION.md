# ONYX Fitness Website — Direct Google Sheet Integration Setup

This guide explains how to connect your ONYX lead capture form directly to your Google Sheet without paid automation tools like Make or Zapier.

Google Sheet URL: `https://docs.google.com/spreadsheets/d/1-ssMCfgTwmEgIh44U-OHKsn7gNOQg-8Crl524nC1bBY/edit?usp=sharing`

---

## Step 1: Open Google Apps Script in your Sheet

1. Open your Google Sheet: `https://docs.google.com/spreadsheets/d/1-ssMCfgTwmEgIh44U-OHKsn7gNOQg-8Crl524nC1bBY/edit`
2. Click **Extensions** in the top menu bar → **Apps Script**.
3. Clear any existing code in `Code.gs` and paste the following snippet:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Ensure column headers exist if row 1 is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Phone", "Email", "Training Interest", "Message"]);
    }
    
    // Append the new lead row
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.trainingInterest || "",
      data.message || ""
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Step 2: Deploy as a Web App

1. Click **Deploy** (top right) → **New deployment**.
2. Select **Web app** as the type (click the gear icon next to "Select type").
3. Configuration settings:
   - **Description**: ONYX Website Lead Collector
   - **Execute as**: Me (`your-google-account@gmail.com`)
   - **Who has access**: **Anyone** *(Crucial so the website can submit leads without password prompts)*
4. Click **Deploy**.
5. Authorize permissions when prompted by Google.
6. Copy the generated **Web App URL** (looks like `https://script.google.com/macros/s/AKfycbx.../exec`).

---

## Step 3: Add Web App URL to Website Environment

Add your Web App URL to `.env` in the website root:

```env
VITE_GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec"
```

Leads submitted through the website form will now automatically append as new rows in your Google Sheet in real time!
