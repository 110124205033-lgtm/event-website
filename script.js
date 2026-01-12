// ERP Attendance Management System - Aalim Muhammed Salegh College

document.addEventListener('DOMContentLoaded', function() {
    // Auto-fill current date
    const today = new Date();
    const dateField = document.getElementById("attendanceDate");
    dateField.value = today.toISOString().split('T')[0];

    // Initialize table with default values
    updateTableHeader();
    updateStatistics();
});

// Update table headers when session/date changes
function updateTableHeader() {
    const session = document.getElementById("sessionSelect").value;
    const date = document.getElementById("attendanceDate").value;

    // Update all session cells (12 students total)
    for (let i = 1; i <= 12; i++) {
        const cell = document.getElementById(`session-cell-${i}`);
        if (cell) {
            cell.textContent = session || '-';
        }
    }

    // Update all date cells
    for (let i = 1; i <= 12; i++) {
        const cell = document.getElementById(`date-cell-${i}`);
        if (cell) {
            cell.textContent = date || '-';
        }
    }
}

// Mark all students as present
function markAllPresent() {
    const selects = document.querySelectorAll('.status-select');
    selects.forEach(select => {
        select.value = 'Present';
    });
    updateStatistics();
}

// Reset all attendance selections
function resetAll() {
    const selects = document.querySelectorAll('.status-select');
    selects.forEach(select => {
        select.value = '';
    });
    updateStatistics();
}

// Update attendance statistics
function updateStatistics() {
    const selects = document.querySelectorAll('.status-select');
    let present = 0, absent = 0, od = 0;

    selects.forEach(select => {
        // Only count visible rows (when filtering by department)
        const row = select.closest('tr');
        if (row.style.display !== 'none') {
            switch (select.value) {
                case 'Present':
                    present++;
                    break;
                case 'Absent':
                    absent++;
                    break;
                case 'OD':
                    od++;
                    break;
            }
        }
    });

    document.getElementById('presentCount').textContent = present;
    document.getElementById('absentCount').textContent = absent;
    document.getElementById('odCount').textContent = od;
}

// Add event listeners for status changes
document.addEventListener('DOMContentLoaded', function() {
    const selects = document.querySelectorAll('.status-select');
    selects.forEach(select => {
        select.addEventListener('change', updateStatistics);
    });
});

// Save attendance data
function saveAttendance() {
    const session = document.getElementById("sessionSelect").value;
    const date = document.getElementById("attendanceDate").value;

    // Validation
    if (!session || !date) {
        alert("Please select Session and Date before saving.");
        return;
    }

    // Collect attendance data
    const attendanceData = [];
    const selects = document.querySelectorAll('.status-select');

    selects.forEach((select, index) => {
        if (select.value) {
            const studentId = select.getAttribute('data-student');
            const studentName = select.getAttribute('data-name');
            const age = select.getAttribute('data-age');

            attendanceData.push({
                studentId: studentId,
                studentName: studentName,
                age: age,
                session: session,
                date: date,
                status: select.value,
                timestamp: new Date().toLocaleString()
            });
        }
    });

    if (attendanceData.length === 0) {
        alert("Please mark attendance for at least one student.");
        return;
    }

    // Show loading
    const loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.style.display = "block";

    // Send to Google Sheets
    const postUrl = "https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec";

    fetch(postUrl, {
        method: "POST",
        body: JSON.stringify({
            attendanceData: attendanceData,
            sessionInfo: {
                session: session,
                date: date,
                totalStudents: attendanceData.length
            }
        })
    })
    .then(response => {
        loadingOverlay.style.display = "none";

        if (response.ok) {
            showSuccessModal(attendanceData, { session, date });
        } else {
            alert('Failed to save attendance. Please check your Google Apps Script URL.');
        }
    })
    .catch(error => {
        loadingOverlay.style.display = "none";
        alert('Error saving attendance: ' + error.message);
        console.error('Error:', error);
    });
}

// Show success modal with attendance summary
function showSuccessModal(attendanceData, sessionInfo) {
    const modal = document.getElementById("successModal");
    const modalDetails = document.getElementById("modalDetails");

    const present = attendanceData.filter(item => item.status === 'Present').length;
    const absent = attendanceData.filter(item => item.status === 'Absent').length;
    const od = attendanceData.filter(item => item.status === 'OD').length;

    modalDetails.innerHTML = `
        <p><strong>Session:</strong> ${sessionInfo.session}</p>
        <p><strong>Date:</strong> ${sessionInfo.date}</p>
        <p><strong>Total Students:</strong> ${attendanceData.length}</p>
        <p><strong>Present:</strong> ${present}</p>
        <p><strong>Absent:</strong> ${absent}</p>
        <p><strong>OD:</strong> ${od}</p>
        <p><strong>Saved at:</strong> ${new Date().toLocaleString()}</p>
    `;

    modal.style.display = "block";
}

// Export to Excel functionality
function exportToExcel() {
    const session = document.getElementById("sessionSelect").value;
    const date = document.getElementById("attendanceDate").value;

    if (!session || !date) {
        alert("Please select Session and Date first.");
        return;
    }

    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,";

    // Add CSV headers
    csvContent += "S.No,Register Number,Student Name,Age,Session,Date,Status\n";

    // Get all attendance data
    const selects = document.querySelectorAll('.status-select');
    let exportedCount = 0;

    selects.forEach((select, index) => {
        if (select.value) {
            const studentId = select.getAttribute('data-student');
            const studentName = select.getAttribute('data-name');
            const age = select.getAttribute('data-age');

            // Escape commas and quotes in CSV
            const escapedName = studentName.replace(/"/g, '""');

            csvContent += `${index + 1},"${studentId}","${escapedName}","${age}","${session}","${date}","${select.value}"\n`;
            exportedCount++;
        }
    });

    if (exportedCount === 0) {
        alert("No attendance data to export. Please mark attendance for at least one student.");
        return;
    }

    // Create and trigger download
    try {
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `attendance_${session.replace(/\s+/g, '_')}_${date}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert(`Successfully exported attendance data for ${exportedCount} students!`);
    } catch (error) {
        console.error('Export error:', error);
        alert('Failed to export attendance data. Please try again.');
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById("successModal");
    modal.style.display = "none";
}

// Filter students by department
function filterByDepartment() {
    const departmentFilter = document.getElementById("departmentFilter").value;
    const tableRows = document.querySelectorAll('#attendanceTable tbody tr');

    tableRows.forEach(row => {
        const registerNumber = row.cells[1].textContent; // Register number is in column 2
        const department = registerNumber.includes('IT') ? 'IT' : 'other';

        // Since all students are now IT department
        if (departmentFilter === 'all' || department === departmentFilter) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    // Update statistics based on visible rows only
    updateStatistics();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("successModal");
    if (event.target == modal) {
        closeModal();
    }
}
