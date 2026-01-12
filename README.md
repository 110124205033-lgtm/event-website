# 🎓 Aalim Muhammed Salegh College - Student Attendance System

A premium, royal-themed web application for managing student attendance with automatic Google Sheets integration.

## 👑 Features

- **Royal & Elegant Design**: Dark blue/navy, maroon, and gold color scheme
- **Responsive Layout**: Works on desktop and mobile devices
- **Auto Date Filling**: Automatically sets current date
- **Form Validation**: Ensures all required fields are filled
- **Google Sheets Integration**: Automatically saves attendance data
- **Success Feedback**: Beautiful modal confirmation
- **Loading States**: Professional loading indicators
- **Duplicate Prevention**: Prevents multiple submissions for same day

## 📋 Form Fields

- **Department Filter**: All Departments / Computer Science / Information Technology
- **Session**: Morning Session / Afternoon Session
- **Date**: Auto-filled current date
- **Student Table** with columns:
  - S.No (Serial Number)
  - Register Number (21CSE001, 21IT001 format)
  - Student Name
  - Age
  - Session (auto-populated)
  - Date (auto-populated)
  - Attendance Status (Present/Absent/OD dropdown)

## 🚀 Quick Start

### 1. Clone/Download Files
- `index.html` - Main ERP interface with table
- `style.css` - Professional academic styling
- `script.js` - Table management and data handling
- `google-apps-script.js` - Google Sheets bulk upload

### 2. Set Up Google Sheets Integration

#### Create Google Sheet:
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Add these headers in row 1:
   ```
   Student Name | Register Number | Age | Session | Date | Status | Timestamp | Faculty IP
   ```

#### Set Up Google Apps Script:
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any default code
3. Copy and paste the code from `google-apps-script.js`
4. Click **Save** (give it a name like "Attendance System")

#### Deploy Web App:
1. Click **Publish > Deploy as web app**
2. Set **Execute as**: Me
3. Set **Who has access**: Anyone, even anonymous
4. Click **Deploy**
5. **Copy the web app URL** (it looks like: `https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec`)

### 3. Update the Code

In `script.js`, find this line:
```javascript
const postUrl = "https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec";
```

Replace `YOUR_WEB_APP_ID` with your actual web app ID from step 2.

### 4. Run the Application

Open `index.html` in any modern web browser. The application will work offline and save data to your Google Sheet when online.

## 🎨 Design Features

- **Royal Color Palette**: Navy blue (#1a365d), maroon (#7c2d12), gold (#d4af37)
- **Premium Fonts**: Crimson Text (serif) for headings, Inter (sans-serif) for body
- **Smooth Animations**: Fade-in effects, hover transitions, loading spinners
- **Glassmorphism**: Semi-transparent elements with backdrop blur
- **Responsive Grid**: Adapts to different screen sizes
- **Professional Modals**: Success confirmations with detailed information

## 📱 Department Information

**Current Setup:** All 12 students are from the **Information Technology Department**

- Register Numbers: 21IT001 to 21IT012
- Ages: 19-21 years
- Department Filter: Shows all IT students when "Information Technology" is selected
- All students have complete profiles with names, ages, and register numbers

## 🛡️ Validation & Security

- **Form Validation**: All fields required with proper error messages
- **Register Number Format**: Validates format (e.g., 21CSE001)
- **Duplicate Prevention**: Prevents multiple submissions for same student/date/status
- **Sanitized Input**: Trims whitespace and validates data types

## 📊 Google Sheets Output

Each submission creates a new row with:
- Timestamp of submission
- Student details
- Attendance status
- IP address for tracking

## 🔧 Customization

### Change College Name:
Edit in `index.html`:
```html
<h1>Aalim Muhammed Salegh College of Engineering</h1>
```

### Add More Departments:
Edit the select options in `index.html`:
```html
<option value="New Department">New Department</option>
```

### Modify Colors:
Update CSS variables in `style.css`:
```css
:root {
    --royal-navy: #1a365d;
    --royal-maroon: #7c2d12;
    --gold: #d4af37;
    /* ... */
}
```

## 📞 Support

For issues or customization requests:
- Check browser console for errors
- Verify Google Apps Script URL is correct
- Ensure Google Sheet headers match exactly

## 📄 License

This project is free for educational institutions. Please maintain attribution to Aalim Muhammed Salegh College.

---

**Built with ❤️ for Aalim Muhammed Salegh College of Engineering**
