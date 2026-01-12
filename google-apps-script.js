// Google Apps Script code for Aalim Muhammed Salegh College ERP Attendance System
//
// SETUP INSTRUCTIONS:
// 1. Create a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Paste this code
// 4. Set up headers in row 1 of the sheet:
//    Student Name | Register Number | Age | Session | Date | Status | Timestamp | Faculty IP
// 5. Deploy as web app: Publish > Deploy as web app
// 6. Set Execute as: Me, Who has access: Anyone
// 7. Copy the web app URL and replace "YOUR_WEB_APP_ID" in script.js

function doPost(e) {
  try {
    // Parse the JSON data from the POST request
    const requestData = JSON.parse(e.postData.contents);

    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Check if it's bulk attendance data or single student data
    if (requestData.attendanceData && Array.isArray(requestData.attendanceData)) {
      // Handle bulk attendance data from ERP system
      const attendanceData = requestData.attendanceData;
      const sessionInfo = requestData.sessionInfo;

      // Check for duplicate session attendance (same session, date)
      const existingData = sheet.getDataRange().getValues();
      const duplicateFound = existingData.some((row, index) => {
        if (index === 0) return false; // Skip header
        return row[3] === sessionInfo.session && row[4] === sessionInfo.date;
      });

      if (duplicateFound) {
        return ContentService
          .createTextOutput(JSON.stringify({
            success: false,
            error: "Attendance already recorded for this session"
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }

      // Append all attendance records
      attendanceData.forEach(record => {
        sheet.appendRow([
          record.studentName,      // Student Name
          record.studentId,        // Register Number
          record.age,              // Age
          record.session,          // Session
          record.date,             // Date
          record.status,           // Status
          record.timestamp,        // Timestamp
          e.parameter.ip || ''     // Faculty IP
        ]);
      });

      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: `Attendance saved for ${attendanceData.length} students in ${sessionInfo.session}`
        }))
        .setMimeType(ContentService.MimeType.JSON);

    } else {
      // Handle single student attendance (legacy support)
      const data = requestData;

      // Check for duplicate submission
      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        const existingData = sheet.getRange(lastRow, 1, 1, 6).getValues()[0];
        if (existingData[1] === data.registerNumber &&
            existingData[4] === data.attendanceDate &&
            existingData[5] === data.attendanceStatus) {
          return ContentService
            .createTextOutput(JSON.stringify({
              success: false,
              error: "Attendance already recorded for this student on this date"
            }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }

      // Append single record
      sheet.appendRow([
        data.studentName,
        data.registerNumber,
        data.age || '',
        data.session || data.department || '',
        data.attendanceDate,
        data.attendanceStatus,
        data.submissionTime,
        data.ip
      ]);

      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: "Attendance recorded successfully for " + data.studentName
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to get attendance statistics for a specific class
function getClassAttendanceStats(subject, period, date) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const stats = {
    total: 0,
    present: 0,
    absent: 0,
    od: 0
  };

  for (let i = 1; i < data.length; i++) { // Skip header
    const row = data[i];
    if (row[2] === subject && row[3] === period && row[4] === date) {
      stats.total++;
      switch (row[5]) { // Status column
        case 'Present':
          stats.present++;
          break;
        case 'Absent':
          stats.absent++;
          break;
        case 'OD':
          stats.od++;
          break;
      }
    }
  }

  return stats;
}

// Function to get overall attendance statistics
function getOverallAttendanceStats() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  if (data.length <= 1) return { total: 0, present: 0, absent: 0, od: 0 };

  const stats = {
    total: data.length - 1,
    present: 0,
    absent: 0,
    od: 0
  };

  for (let i = 1; i < data.length; i++) {
    switch (data[i][5]) {
      case 'Present':
        stats.present++;
        break;
      case 'Absent':
        stats.absent++;
        break;
      case 'OD':
        stats.od++;
        break;
    }
  }

  return stats;
}
