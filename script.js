// ERP Attendance Management System - Aalim Muhammed Salegh College

// Student data storage (in real app, this would be from database)
let studentsData = {
    '21IT001': {
        name: 'Arun Kumar',
        age: 20,
        course: 'Information Technology',
        address: '123 Main Street, Chennai, Tamil Nadu - 600001',
        phone: '+91 9876543210',
        email: 'arun.kumar@example.com',
        height: 175,
        department: 'Information Technology',
        year: 'III',
        section: 'A'
    },
    '21IT002': {
        name: 'Balaji Ramesh',
        age: 19,
        course: 'Information Technology',
        address: '456 Oak Avenue, Chennai, Tamil Nadu - 600002',
        phone: '+91 9876543211',
        email: 'balaji.ramesh@example.com',
        height: 170,
        department: 'Information Technology',
        year: 'III',
        section: 'A'
    },
    '21IT003': {
        name: 'Chitra Devi',
        age: 20,
        course: 'Information Technology',
        address: '789 Pine Road, Chennai, Tamil Nadu - 600003',
        phone: '+91 9876543212',
        email: 'chitra.devi@example.com',
        height: 165,
        department: 'Information Technology',
        year: 'III',
        section: 'B'
    },
    '21IT004': {
        name: 'Dinesh Kumar',
        age: 21,
        course: 'Information Technology',
        address: '321 Elm Street, Chennai, Tamil Nadu - 600004',
        phone: '+91 9876543213',
        email: 'dinesh.kumar@example.com',
        height: 180,
        department: 'Information Technology',
        year: 'III',
        section: 'A'
    },
    '21IT005': {
        name: 'Eswari Lakshmi',
        age: 19,
        course: 'Information Technology',
        address: '654 Maple Drive, Chennai, Tamil Nadu - 600005',
        phone: '+91 9876543214',
        email: 'eswari.lakshmi@example.com',
        height: 162,
        department: 'Information Technology',
        year: 'III',
        section: 'B'
    },
    '21IT006': {
        name: 'Fathima Beevi',
        age: 20,
        course: 'Information Technology',
        address: '987 Cedar Lane, Chennai, Tamil Nadu - 600006',
        phone: '+91 9876543215',
        email: 'fathima.beevi@example.com',
        height: 168,
        department: 'Information Technology',
        year: 'III',
        section: 'A'
    },
    '21IT007': {
        name: 'Ganesh Prasad',
        age: 21,
        course: 'Information Technology',
        address: '147 Birch Street, Chennai, Tamil Nadu - 600007',
        phone: '+91 9876543216',
        email: 'ganesh.prasad@example.com',
        height: 178,
        department: 'Information Technology',
        year: 'III',
        section: 'B'
    },
    '21IT008': {
        name: 'Hema Latha',
        age: 19,
        course: 'Information Technology',
        address: '258 Willow Avenue, Chennai, Tamil Nadu - 600008',
        phone: '+91 9876543217',
        email: 'hema.latha@example.com',
        height: 160,
        department: 'Information Technology',
        year: 'III',
        section: 'A'
    },
    '21IT009': {
        name: 'Rajesh Kumar',
        age: 20,
        course: 'Information Technology',
        address: '369 Spruce Road, Chennai, Tamil Nadu - 600009',
        phone: '+91 9876543218',
        email: 'rajesh.kumar@example.com',
        height: 172,
        department: 'Information Technology',
        year: 'III',
        section: 'B'
    },
    '21IT010': {
        name: 'Saranya Devi',
        age: 19,
        course: 'Information Technology',
        address: '741 Ash Street, Chennai, Tamil Nadu - 600010',
        phone: '+91 9876543219',
        email: 'saranya.devi@example.com',
        height: 166,
        department: 'Information Technology',
        year: 'III',
        section: 'A'
    },
    '21IT011': {
        name: 'Venkatesh Iyer',
        age: 21,
        course: 'Information Technology',
        address: '852 Poplar Drive, Chennai, Tamil Nadu - 600011',
        phone: '+91 9876543220',
        email: 'venkatesh.iyer@example.com',
        height: 176,
        department: 'Information Technology',
        year: 'III',
        section: 'B'
    },
    '21IT012': {
        name: 'Priya Sharma',
        age: 20,
        course: 'Information Technology',
        address: '963 Fir Lane, Chennai, Tamil Nadu - 600012',
        phone: '+91 9876543221',
        email: 'priya.sharma@example.com',
        height: 164,
        department: 'Information Technology',
        year: 'III',
        section: 'A'
    }
};

// Attendance History storage
let attendanceHistory = [];

// Faculty data storage
let facultyData = {
    'AMS001': {
        id: 'AMS001',
        name: 'Dr. Rajesh Kumar',
        department: 'Information Technology',
        designation: 'Associate Professor',
        password: 'faculty123',
        email: 'rajesh.kumar@amsce.edu.in',
        phone: '+91 9876543210'
    }
};

// Current logged-in faculty session
let currentFaculty = null;

// Academic Performance data
let academicPerformance = {
    '21IT001': {
        examMarks: {
            internal: { mathematics: 85, physics: 78, chemistry: 82, english: 88 },
            model: { mathematics: 88, physics: 82, chemistry: 85, english: 90 },
            semester: { mathematics: 92, physics: 88, chemistry: 89, english: 94 }
        },
        cgpa: 8.7,
        grade: 'A',
        rank: 3
    },
    '21IT002': {
        examMarks: {
            internal: { mathematics: 78, physics: 85, chemistry: 79, english: 82 },
            model: { mathematics: 82, physics: 88, chemistry: 83, english: 85 },
            semester: { mathematics: 85, physics: 91, chemistry: 87, english: 88 }
        },
        cgpa: 8.4,
        grade: 'A',
        rank: 7
    },
    '21IT003': {
        examMarks: {
            internal: { mathematics: 92, physics: 88, chemistry: 89, english: 91 },
            model: { mathematics: 95, physics: 91, chemistry: 92, english: 93 },
            semester: { mathematics: 98, physics: 94, chemistry: 95, english: 96 }
        },
        cgpa: 9.2,
        grade: 'A+',
        rank: 1
    },
    '21IT004': {
        examMarks: {
            internal: { mathematics: 82, physics: 79, chemistry: 85, english: 86 },
            model: { mathematics: 85, physics: 83, chemistry: 88, english: 88 },
            semester: { mathematics: 87, physics: 86, chemistry: 91, english: 89 }
        },
        cgpa: 8.6,
        grade: 'A',
        rank: 5
    },
    '21IT005': {
        examMarks: {
            internal: { mathematics: 88, physics: 91, chemistry: 87, english: 89 },
            model: { mathematics: 91, physics: 93, chemistry: 90, english: 92 },
            semester: { mathematics: 94, physics: 96, chemistry: 93, english: 95 }
        },
        cgpa: 9.0,
        grade: 'A+',
        rank: 2
    },
    '21IT006': {
        examMarks: {
            internal: { mathematics: 75, physics: 82, chemistry: 78, english: 81 },
            model: { mathematics: 79, physics: 85, chemistry: 82, english: 84 },
            semester: { mathematics: 82, physics: 87, chemistry: 85, english: 86 }
        },
        cgpa: 8.2,
        grade: 'A',
        rank: 9
    },
    '21IT007': {
        examMarks: {
            internal: { mathematics: 79, physics: 76, chemistry: 83, english: 85 },
            model: { mathematics: 83, physics: 80, chemistry: 86, english: 87 },
            semester: { mathematics: 86, physics: 83, chemistry: 89, english: 88 }
        },
        cgpa: 8.3,
        grade: 'A',
        rank: 8
    },
    '21IT008': {
        examMarks: {
            internal: { mathematics: 91, physics: 87, chemistry: 88, english: 90 },
            model: { mathematics: 93, physics: 89, chemistry: 91, english: 92 },
            semester: { mathematics: 96, physics: 92, chemistry: 94, english: 93 }
        },
        cgpa: 8.9,
        grade: 'A',
        rank: 4
    },
    '21IT009': {
        examMarks: {
            internal: { mathematics: 73, physics: 78, chemistry: 75, english: 79 },
            model: { mathematics: 76, physics: 81, chemistry: 78, english: 82 },
            semester: { mathematics: 79, physics: 84, chemistry: 81, english: 83 }
        },
        cgpa: 7.9,
        grade: 'B+',
        rank: 11
    },
    '21IT010': {
        examMarks: {
            internal: { mathematics: 86, physics: 89, chemistry: 84, english: 87 },
            model: { mathematics: 89, physics: 92, chemistry: 87, english: 89 },
            semester: { mathematics: 91, physics: 94, chemistry: 89, english: 90 }
        },
        cgpa: 8.5,
        grade: 'A',
        rank: 6
    },
    '21IT011': {
        examMarks: {
            internal: { mathematics: 71, physics: 74, chemistry: 72, english: 76 },
            model: { mathematics: 74, physics: 77, chemistry: 75, english: 78 },
            semester: { mathematics: 77, physics: 80, chemistry: 78, english: 79 }
        },
        cgpa: 7.7,
        grade: 'B+',
        rank: 12
    },
    '21IT012': {
        examMarks: {
            internal: { mathematics: 84, physics: 86, chemistry: 83, english: 88 },
            model: { mathematics: 87, physics: 89, chemistry: 86, english: 90 },
            semester: { mathematics: 89, physics: 91, chemistry: 88, english: 91 }
        },
        cgpa: 8.4,
        grade: 'A',
        rank: 7
    }
};

// Extracurricular Activities data
let extracurricularActivities = {
    '21IT001': {
        certificates: [
            { type: 'Technical', name: 'Web Development Workshop', issuer: 'IEEE Student Branch', date: '2024-03-15' },
            { type: 'Cultural', name: 'College Day Dance Competition', issuer: 'College Cultural Committee', date: '2024-02-28' }
        ],
        events: [
            { category: 'Technical', name: 'Hackathon 2024', position: 'Participant', date: '2024-04-10' },
            { category: 'Sports', name: 'Inter-College Cricket Tournament', position: 'Team Player', date: '2024-03-20' }
        ],
        achievements: [
            'Best Student Award - 2023',
            'IEEE Membership Holder'
        ]
    },
    '21IT002': {
        certificates: [
            { type: 'Technical', name: 'Python Programming Bootcamp', issuer: 'Computer Science Department', date: '2024-01-20' },
            { type: 'Workshop', name: 'AI & Machine Learning Seminar', issuer: 'CSI Chapter', date: '2024-02-15' }
        ],
        events: [
            { category: 'Cultural', name: 'College Drama Competition', position: 'Actor', date: '2024-01-30' },
            { category: 'Sports', name: 'Basketball Championship', position: 'Team Captain', date: '2024-03-05' }
        ],
        achievements: [
            'Sports Excellence Award',
            'Drama Club Member'
        ]
    },
    '21IT003': {
        certificates: [
            { type: 'Technical', name: 'Mobile App Development Workshop', issuer: 'ISTE Student Chapter', date: '2024-03-10' },
            { type: 'Cultural', name: 'Classical Music Competition', issuer: 'Music Club', date: '2024-02-20' },
            { type: 'Workshop', name: 'Entrepreneurship Summit', issuer: 'EDC Cell', date: '2024-04-05' }
        ],
        events: [
            { category: 'Technical', name: 'Project Exhibition', position: 'First Prize', date: '2024-03-25' },
            { category: 'Cultural', name: 'Fine Arts Festival', position: 'Gold Medal', date: '2024-02-10' },
            { category: 'Sports', name: 'Volleyball Tournament', position: 'Runner-up', date: '2024-01-15' }
        ],
        achievements: [
            'Academic Excellence Award',
            'Best Project Award',
            'Cultural Achievement Medal',
            'Sports Participation Certificate'
        ]
    },
    '21IT004': {
        certificates: [
            { type: 'Technical', name: 'Data Science Workshop', issuer: 'Analytics Club', date: '2024-02-25' },
            { type: 'Workshop', name: 'Cyber Security Awareness', issuer: 'Cyber Security Cell', date: '2024-03-30' }
        ],
        events: [
            { category: 'Technical', name: 'Coding Competition', position: 'Participant', date: '2024-02-05' },
            { category: 'Sports', name: 'Football Championship', position: 'Team Player', date: '2024-04-15' }
        ],
        achievements: [
            'Consistent Performer Award'
        ]
    },
    '21IT005': {
        certificates: [
            { type: 'Technical', name: 'IoT Workshop', issuer: 'Electronics Club', date: '2024-01-25' },
            { type: 'Cultural', name: 'Debate Competition', issuer: 'Literary Club', date: '2024-02-18' },
            { type: 'Workshop', name: 'Research Methodology', issuer: 'Research Cell', date: '2024-03-12' }
        ],
        events: [
            { category: 'Technical', name: 'Innovation Challenge', position: 'Second Prize', date: '2024-03-08' },
            { category: 'Cultural', name: 'Essay Writing Competition', position: 'Winner', date: '2024-02-22' },
            { category: 'Sports', name: 'Badminton Singles', position: 'Quarter Finalist', date: '2024-01-28' }
        ],
        achievements: [
            'Innovation Award',
            'Literary Excellence',
            'Research Excellence Certificate'
        ]
    },
    '21IT006': {
        certificates: [
            { type: 'Technical', name: 'Cloud Computing Workshop', issuer: 'Cloud Club', date: '2024-03-05' }
        ],
        events: [
            { category: 'Sports', name: 'Table Tennis Tournament', position: 'Participant', date: '2024-02-12' }
        ],
        achievements: []
    },
    '21IT007': {
        certificates: [
            { type: 'Workshop', name: 'Soft Skills Development', issuer: 'Placement Cell', date: '2024-01-18' }
        ],
        events: [
            { category: 'Cultural', name: 'Photography Contest', position: 'Participant', date: '2024-03-15' },
            { category: 'Sports', name: 'Chess Championship', position: 'Participant', date: '2024-02-08' }
        ],
        achievements: [
            'Soft Skills Certificate'
        ]
    },
    '21IT008': {
        certificates: [
            { type: 'Technical', name: 'Embedded Systems Workshop', issuer: 'Robotics Club', date: '2024-02-28' },
            { type: 'Cultural', name: 'Poetry Recitation', issuer: 'Literary Club', date: '2024-01-22' }
        ],
        events: [
            { category: 'Technical', name: 'Robotics Competition', position: 'Team Member', date: '2024-03-18' },
            { category: 'Cultural', name: 'Literary Fest', position: 'Participant', date: '2024-02-25' },
            { category: 'Sports', name: 'Kabaddi Tournament', position: 'Team Player', date: '2024-04-02' }
        ],
        achievements: [
            'Robotics Team Member',
            'Literary Participation'
        ]
    },
    '21IT009': {
        certificates: [
            { type: 'Workshop', name: 'Communication Skills', issuer: 'Placement Cell', date: '2024-02-10' }
        ],
        events: [
            { category: 'Sports', name: 'Cricket Tournament', position: 'Participant', date: '2024-03-12' }
        ],
        achievements: []
    },
    '21IT010': {
        certificates: [
            { type: 'Technical', name: 'Database Management Workshop', issuer: 'Computer Science Department', date: '2024-01-30' },
            { type: 'Workshop', name: 'Leadership Training', issuer: 'Student Council', date: '2024-03-20' }
        ],
        events: [
            { category: 'Technical', name: 'Database Design Competition', position: 'Participant', date: '2024-02-15' },
            { category: 'Cultural', name: 'College Magazine Contributor', position: 'Writer', date: '2024-04-08' }
        ],
        achievements: [
            'Leadership Training Certificate',
            'Magazine Contributor'
        ]
    },
    '21IT011': {
        certificates: [
            { type: 'Workshop', name: 'Time Management Workshop', issuer: 'Career Guidance Cell', date: '2024-02-05' }
        ],
        events: [
            { category: 'Sports', name: 'Volleyball Tournament', position: 'Participant', date: '2024-01-25' }
        ],
        achievements: []
    },
    '21IT012': {
        certificates: [
            { type: 'Technical', name: 'UI/UX Design Workshop', issuer: 'Design Club', date: '2024-03-08' },
            { type: 'Cultural', name: 'Art Exhibition', issuer: 'Fine Arts Club', date: '2024-02-14' }
        ],
        events: [
            { category: 'Technical', name: 'Design Challenge', position: 'Participant', date: '2024-03-22' },
            { category: 'Cultural', name: 'Art Competition', position: 'Participant', date: '2024-02-18' },
            { category: 'Sports', name: 'Throwball Tournament', position: 'Team Player', date: '2024-01-20' }
        ],
        achievements: [
            'Design Skills Certificate',
            'Artistic Achievement'
        ]
    }
};

// Load data from localStorage on startup
function loadFromLocalStorage() {
    const savedStudents = localStorage.getItem('studentsData');
    const savedHistory = localStorage.getItem('attendanceHistory');

    if (savedStudents) {
        Object.assign(studentsData, JSON.parse(savedStudents));
    }

    if (savedHistory) {
        attendanceHistory = JSON.parse(savedHistory);
    }
}

// Save data to localStorage
function saveToLocalStorage() {
    localStorage.setItem('studentsData', JSON.stringify(studentsData));
    localStorage.setItem('attendanceHistory', JSON.stringify(attendanceHistory));
}

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication first
    checkAuthentication();
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
    // NOTE: Replace with your actual Google Apps Script web app URL
    // Instructions in README.md for setting up Google Sheets integration
    const postUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

    // Calculate attendance statistics
    const present = attendanceData.filter(item => item.status === 'Present').length;
    const absent = attendanceData.filter(item => item.status === 'Absent').length;
    const od = attendanceData.filter(item => item.status === 'OD').length;

    // Create attendance history record
    const historyRecord = {
        id: Date.now(), // Unique ID for the session
        date: date,
        session: session,
        subject: 'Information Technology', // Default subject, could be made configurable
        totalStudents: attendanceData.length,
        presentStudents: present,
        absentStudents: absent,
        odStudents: od,
        attendanceSummary: `Present: ${present}, Absent: ${absent}, OD: ${od}`,
        timestamp: new Date().toLocaleString(),
        attendanceData: attendanceData // Store the detailed attendance data
    };

    // Add to attendance history
    attendanceHistory.push(historyRecord);

    // Save to localStorage
    saveToLocalStorage();

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
            // Show success modal
            showSuccessModal(attendanceData, { session, date });

            // Auto-export to Excel after successful save
            setTimeout(() => {
                exportToExcel();
            }, 1000); // Small delay to ensure modal is visible

            // Refresh the page after export
            setTimeout(() => {
                location.reload();
            }, 2000); // Give time for export to complete

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

    const present = attendanceData.filter(item => item.status === 'Present' ).length;
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

    // Get all attendance data
    const selects = document.querySelectorAll('.status-select');
    const attendanceData = [];

    selects.forEach((select, index) => {
        if (select.value) {
            const studentId = select.getAttribute('data-student');
            const studentName = select.getAttribute('data-name');
            const age = select.getAttribute('data-age');

            attendanceData.push({
                sno: index + 1,
                registerNumber: studentId,
                studentName: studentName,
                age: age,
                session: session,
                date: date,
                status: select.value
            });
        }
    });

    if (attendanceData.length === 0) {
        alert("No attendance data to export. Please mark attendance for at least one student.");
        return;
    }

    try {
        // Create workbook and worksheet
        const wb = XLSX.utils.book_new();

        // Create header data with college information
        const headerData = [
            ["Aalim Muhammed Salegh College of Engineering"],
            ["ERP Attendance Management System"],
            [`Session: ${session}`, `Date: ${date}`],
            [""], // Empty row
            ["S.No", "Register Number", "Student Name", "Age", "Session", "Date", "Status"]
        ];

        // Add attendance data to header
        attendanceData.forEach((student, index) => {
            headerData.push([
                student.sno,
                student.registerNumber,
                student.studentName,
                student.age,
                student.session,
                student.date,
                student.status
            ]);
        });

        const ws = XLSX.utils.aoa_to_sheet(headerData);

        // Set column widths
        ws['!cols'] = [
            { width: 5 },  // S.No
            { width: 15 }, // Register Number
            { width: 25 }, // Student Name
            { width: 5 },  // Age
            { width: 20 }, // Session
            { width: 12 }, // Date
            { width: 10 }  // Status
        ];

        // Style the header rows
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 7; col++) {
                const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
                if (!ws[cellAddress]) continue;

                if (!ws[cellAddress].s) ws[cellAddress].s = {};
                ws[cellAddress].s.font = {
                    bold: true,
                    sz: row === 0 ? 16 : row === 1 ? 14 : 12,
                    color: { rgb: "1e293b" }
                };
                ws[cellAddress].s.alignment = { horizontal: "center" };
            }
        }

        // Style the table header
        for (let col = 0; col < 7; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: 4, c: col });
            if (ws[cellAddress]) {
                if (!ws[cellAddress].s) ws[cellAddress].s = {};
                ws[cellAddress].s.font = { bold: true, color: { rgb: "ffffff" } };
                ws[cellAddress].s.fill = { fgColor: { rgb: "1e293b" } };
                ws[cellAddress].s.alignment = { horizontal: "center" };
            }
        }

        // Apply color formatting to status column (column G, starting from row 5)
        const dataStartRow = 5; // Data starts at row 5 (0-indexed)
        for (let row = dataStartRow; row < headerData.length; row++) {
            const cellAddress = XLSX.utils.encode_cell({ r: row, c: 6 }); // Status column
            const cell = ws[cellAddress];

            if (cell && cell.v) {
                // Apply font color based on status
                if (!ws[cellAddress].s) ws[cellAddress].s = {};

                switch (cell.v) {
                    case 'Present':
                        ws[cellAddress].s.font = { color: { rgb: "008000" }, bold: true }; // Green
                        break;
                    case 'Absent':
                        ws[cellAddress].s.font = { color: { rgb: "FF0000" }, bold: true }; // Red
                        break;
                    case 'OD':
                        ws[cellAddress].s.font = { color: { rgb: "0000FF" }, bold: true }; // Blue
                        break;
                }
                ws[cellAddress].s.alignment = { horizontal: "center" };
            }
        }



        // Merge cells for header
        ws['!merges'] = [
            { s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }, // College name
            { s: { r: 1, c: 0 }, e: { r: 1, c: 6 } }, // System name
            { s: { r: 2, c: 0 }, e: { r: 2, c: 2 } }, // Session
            { s: { r: 2, c: 3 }, e: { r: 2, c: 6 } }  // Date
        ];

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, "Attendance");

        // Generate Excel file and trigger download
        const fileName = `attendance_${session.replace(/\s+/g, '_')}_${date}.xlsx`;
        XLSX.writeFile(wb, fileName);

        alert(`Successfully exported attendance data for ${attendanceData.length} students to Excel!`);

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

// Navigation functions
function showSection(section) {
    // Update navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Hide all sections
    document.querySelector('.erp-container').style.display = 'none';
    document.getElementById('studentListSection').style.display = 'none';
    document.getElementById('attendanceHistorySection').style.display = 'none';
    document.getElementById('reportsSection').style.display = 'none';

    if (section === 'dashboard' || section === 'attendance-entry') {
        document.querySelector('.erp-container').style.display = 'block';
        document.querySelector('[onclick="showSection(\'' + section + '\')"]').classList.add('active');
    } else if (section === 'student-details') {
        document.getElementById('studentListSection').style.display = 'block';
        showStudentList();
        document.querySelector('[onclick="showSection(\'student-details\')"]').classList.add('active');
    } else if (section === 'attendance-history') {
        document.getElementById('attendanceHistorySection').style.display = 'block';
        populateStudentFilter();
        displayAttendanceHistory();
        document.querySelector('[onclick="showSection(\'attendance-history\')"]').classList.add('active');
    } else if (section === 'reports') {
        document.getElementById('reportsSection').style.display = 'block';
        document.querySelector('[onclick="showSection(\'reports\')"]').classList.add('active');
    } else if (section === 'attendanceReportSection') {
        document.getElementById('attendanceReportSection').style.display = 'block';
        // Initialize and populate the summary report
        initializeAttendanceSummaryFilters();
        filterAttendanceSummary();
        // This is accessed from reports, no nav highlighting needed
    } else if (section === 'studentResultSection') {
        document.getElementById('studentResultSection').style.display = 'block';
        populateStudentDropdown();
        // This is accessed from reports, no nav highlighting needed
    }
}

// Student Details Modal functions
function showStudentDetails(studentId) {
    const student = studentsData[studentId];
    if (!student) {
        alert('Student data not found!');
        return;
    }

    const modal = document.getElementById("studentDetailsModal");
    const content = document.getElementById("studentDetailsContent");

    content.innerHTML = `
        <div class="detail-row">
            <span class="detail-label">Student ID:</span>
            <span class="detail-value">${studentId}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Name:</span>
            <span class="detail-value">${student.name}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Department:</span>
            <span class="detail-value">${student.department}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Year:</span>
            <span class="detail-value">${student.year}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Section:</span>
            <span class="detail-value">${student.section}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Mobile Number:</span>
            <span class="detail-value">${student.phone || 'Not provided'}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Address:</span>
            <span class="detail-value">${student.address || 'Not provided'}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Email:</span>
            <span class="detail-value">${student.email || 'Not provided'}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Actions:</span>
            <span class="detail-value">
                <button class="btn-primary" onclick="editStudent('${studentId}')">Edit</button>
                <button class="btn-secondary" onclick="deleteStudent('${studentId}')" style="margin-left: 0.5rem;">Delete</button>
            </span>
        </div>
    `;

    modal.style.display = "block";
}

function closeStudentDetailsModal() {
    const modal = document.getElementById("studentDetailsModal");
    modal.style.display = "none";
}

function editStudent(studentId) {
    const student = studentsData[studentId];
    if (!student) {
        alert('Student data not found!');
        return;
    }

    closeStudentDetailsModal();

    // Pre-fill the form
    const modal = document.getElementById("addStudentModal");
    document.getElementById("addStudentTitle").textContent = "Edit Student";

    document.getElementById("studentRegNo").value = studentId;
    document.getElementById("studentName").value = student.name;
    document.getElementById("studentAge").value = student.age;
    document.getElementById("studentCourse").value = student.course;
    document.getElementById("studentAddress").value = student.address;
    document.getElementById("studentPhone").value = student.phone;
    document.getElementById("studentEmail").value = student.email || '';
    document.getElementById("studentHeight").value = student.height || '';

    // Add department, year, section fields if they exist
    const departmentField = document.getElementById("studentDepartment");
    const yearField = document.getElementById("studentYear");
    const sectionField = document.getElementById("studentSection");

    if (departmentField) departmentField.value = student.department || 'Information Technology';
    if (yearField) yearField.value = student.year || 'III';
    if (sectionField) sectionField.value = student.section || 'A';

    modal.style.display = "block";
}

function deleteStudent(studentId) {
    if (!confirm(`Are you sure you want to delete student ${studentsData[studentId]?.name}? This action cannot be undone.`)) {
        return;
    }

    delete studentsData[studentId];
    alert('Student deleted successfully!');

    // Refresh the student list
    showStudentList();

    // Also update attendance table if needed
    updateAttendanceTable();
}

// Add Student Modal functions
function showAddStudentModal() {
    const modal = document.getElementById("addStudentModal");
    document.getElementById("addStudentTitle").textContent = "Add New Student";
    document.getElementById("studentForm").reset();
    modal.style.display = "block";
}

function closeAddStudentModal() {
    const modal = document.getElementById("addStudentModal");
    modal.style.display = "none";
}

function initializeStudentForm() {
    const form = document.getElementById("studentForm");
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        saveStudent();
    });
}

function saveStudent() {
    const formData = new FormData(document.getElementById("studentForm"));

    const studentData = {
        regNo: formData.get('regNo'),
        name: formData.get('name'),
        age: parseInt(formData.get('age')),
        course: formData.get('course'),
        address: formData.get('address'),
        phone: formData.get('phone'),
        email: formData.get('email') || null,
        height: formData.get('height') ? parseInt(formData.get('height')) : null,
        department: formData.get('department') || 'Information Technology',
        year: formData.get('year') || 'III',
        section: formData.get('section') || 'A'
    };

    // Validate required fields
    if (!studentData.regNo || !studentData.name || !studentData.age || !studentData.course || !studentData.address || !studentData.phone) {
        alert('Please fill in all required fields.');
        return;
    }

    // Check if student ID already exists
    if (studentsData[studentData.regNo]) {
        alert('A student with this register number already exists!');
        return;
    }

    // Add to students data
    studentsData[studentData.regNo] = {
        name: studentData.name,
        age: studentData.age,
        course: studentData.course,
        address: studentData.address,
        phone: studentData.phone,
        email: studentData.email,
        height: studentData.height,
        department: studentData.department,
        year: studentData.year,
        section: studentData.section
    };

    // Update attendance table if needed
    updateAttendanceTable();

    // Close modal and show success
    closeAddStudentModal();
    alert(`Student ${studentData.name} added successfully!`);

    // Refresh student list if it's currently shown
    if (document.getElementById('studentListSection').style.display !== 'none') {
        showStudentList();
    }
}

function updateAttendanceTable() {
    // In a real app, this would refresh the table from the database
    // For now, we'll just ensure the data is consistent
    console.log('Attendance table would be refreshed with new student data');
}

// Student List functions
function showStudentList() {
    const grid = document.querySelector('.student-grid');
    const studentCount = Object.keys(studentsData).length;

    // Create table HTML
    let tableHTML = `
        <div class="student-list-header">
            <h2>Student Directory</h2>
            <button class="btn-primary" onclick="showAddStudentModal()">Add Student</button>
        </div>
        <div class="student-table-container">
            <table id="studentTable" class="erp-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Year</th>
                        <th>Section</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
    `;

    // Add student rows
    Object.keys(studentsData).forEach(studentId => {
        const student = studentsData[studentId];
        tableHTML += `
            <tr>
                <td>${studentId}</td>
                <td>${student.name}</td>
                <td>${student.department}</td>
                <td>${student.year}</td>
                <td>${student.section}</td>
                <td>${student.phone || 'Not provided'}</td>
                <td>${student.address || 'Not provided'}</td>
                <td>${student.email || 'Not provided'}</td>
                <td>
                    <button class="btn-primary" onclick="editStudent('${studentId}')">Edit</button>
                    <button class="btn-secondary" onclick="deleteStudent('${studentId}')" style="margin-left: 0.5rem;">Delete</button>
                </td>
            </tr>
        `;
    });

    tableHTML += `
                </tbody>
            </table>
        </div>
    `;

    grid.innerHTML = tableHTML;
}

// Make all student names in table clickable
function makeStudentNamesClickable() {
    const tableRows = document.querySelectorAll('#attendanceTable tbody tr');

    tableRows.forEach(row => {
        const nameCell = row.cells[2]; // Student name is in column 3
        const registerNumber = row.cells[1].textContent; // Register number is in column 2

        if (studentsData[registerNumber]) {
            const studentName = studentsData[registerNumber].name;
            nameCell.innerHTML = `<a href="#" class="student-link" onclick="showStudentDetails('${registerNumber}')">${studentName}</a>`;
        }
    });
}

// Attendance History functions
function populateStudentFilter() {
    const filterSelect = document.getElementById('historyStudentFilter');
    // Clear existing options except "All Students"
    filterSelect.innerHTML = '<option value="all">All Students</option>';

    // Add student options
    Object.keys(studentsData).forEach(studentId => {
        const option = document.createElement('option');
        option.value = studentId;
        option.textContent = `${studentId} - ${studentsData[studentId].name}`;
        filterSelect.appendChild(option);
    });
}

function displayAttendanceHistory() {
    const tbody = document.querySelector('#attendanceHistoryTable tbody');

    if (attendanceHistory.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 3rem; color: var(--erp-text-light);">
                    <div style="font-size: 1.2rem; margin-bottom: 1rem;">📊</div>
                    <div>No attendance history available</div>
                    <div style="font-size: 0.9rem; margin-top: 0.5rem;">Attendance data will appear here once students' attendance is saved.</div>
                </td>
            </tr>
        `;
        return;
    }

    // Sort by date and time (most recent first)
    const sortedHistory = [...attendanceHistory].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    let tableHTML = '';

    sortedHistory.forEach(record => {
        tableHTML += `
            <tr>
                <td>${record.date}</td>
                <td>${record.session}</td>
                <td>${record.subject}</td>
                <td>${record.totalStudents}</td>
                <td style="color: #10b981; font-weight: 600;">${record.presentStudents}</td>
                <td style="color: #ef4444; font-weight: 600;">${record.absentStudents}</td>
                <td style="color: #3b82f6; font-weight: 600;">${record.odStudents}</td>
                <td>${record.attendanceSummary}</td>
            </tr>
        `;
    });

    tbody.innerHTML = tableHTML;
}

function filterAttendanceHistory() {
    const studentFilter = document.getElementById('historyStudentFilter').value;
    const dateFrom = document.getElementById('historyDateFrom').value;
    const dateTo = document.getElementById('historyDateTo').value;

    const tbody = document.querySelector('#attendanceHistoryTable tbody');

    if (attendanceHistory.length === 0) {
        displayAttendanceHistory();
        return;
    }

    // Filter the history based on criteria
    let filteredHistory = [...attendanceHistory];

    // Filter by date range if specified
    if (dateFrom) {
        filteredHistory = filteredHistory.filter(record => record.date >= dateFrom);
    }
    if (dateTo) {
        filteredHistory = filteredHistory.filter(record => record.date <= dateTo);
    }

    // For now, student filter is not implemented as it would require checking individual attendance records
    // This could be enhanced to show history for specific students

    // Sort by date and time (most recent first)
    filteredHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (filteredHistory.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 3rem; color: var(--erp-text-light);">
                    <div style="font-size: 1.2rem; margin-bottom: 1rem;">🔍</div>
                    <div>No attendance records found for the selected filters</div>
                    <div style="font-size: 0.9rem; margin-top: 0.5rem;">Try adjusting your search criteria.</div>
                </td>
            </tr>
        `;
        return;
    }

    let tableHTML = '';

    filteredHistory.forEach(record => {
        tableHTML += `
            <tr>
                <td>${record.date}</td>
                <td>${record.session}</td>
                <td>${record.subject}</td>
                <td>${record.totalStudents}</td>
                <td style="color: #10b981; font-weight: 600;">${record.presentStudents}</td>
                <td style="color: #ef4444; font-weight: 600;">${record.absentStudents}</td>
                <td style="color: #3b82f6; font-weight: 600;">${record.odStudents}</td>
                <td>${record.attendanceSummary}</td>
            </tr>
        `;
    });

    tbody.innerHTML = tableHTML;
}

// Reports functions
function showAttendanceReport() {
    // Navigate to attendance report
    showSection('attendanceReportSection');
}

function showStudentResultReport() {
    // Navigate to student result report
    showSection('studentResultSection');
    populateStudentDropdown();
}

function populateStudentDropdown() {
    const select = document.getElementById('performanceStudentFilter');
    select.innerHTML = '<option value="">Choose a student...</option>';

    Object.keys(studentsData).forEach(studentId => {
        const option = document.createElement('option');
        option.value = studentId;
        option.textContent = `${studentId} - ${studentsData[studentId].name}`;
        select.appendChild(option);
    });
}

function showStudentPerformance() {
    const studentId = document.getElementById('performanceStudentFilter').value;
    const contentDiv = document.getElementById('performanceContent');
    const placeholderDiv = document.getElementById('performancePlaceholder');

    if (!studentId) {
        contentDiv.style.display = 'none';
        placeholderDiv.style.display = 'block';
        return;
    }

    const student = studentsData[studentId];
    const academic = academicPerformance[studentId];
    const extracurricular = extracurricularActivities[studentId];

    let performanceHTML = `
        <div class="performance-header">
            <div class="student-info-card">
                <h3>${student.name}</h3>
                <p><strong>ID:</strong> ${studentId}</p>
                <p><strong>Department:</strong> ${student.department}</p>
                <p><strong>Year:</strong> ${student.year} | <strong>Section:</strong> ${student.section}</p>
                <p><strong>Email:</strong> ${student.email || 'Not provided'}</p>
                <p><strong>Phone:</strong> ${student.phone || 'Not provided'}</p>
            </div>
        </div>

        <div class="performance-sections">
            <!-- Academic Performance -->
            <div class="performance-section">
                <h4>📚 Academic Performance</h4>
                <div class="academic-summary">
                    <div class="summary-item">
                        <span class="label">CGPA:</span>
                        <span class="value">${academic.cgpa}</span>
                    </div>
                    <div class="summary-item">
                        <span class="label">Grade:</span>
                        <span class="value">${academic.grade}</span>
                    </div>
                    <div class="summary-item">
                        <span class="label">Class Rank:</span>
                        <span class="value">${academic.rank}</span>
                    </div>
                </div>

                <div class="exam-marks">
                    <h5>Exam Marks</h5>
                    <div class="marks-grid">
                        <div class="subject-card">
                            <h6>Mathematics</h6>
                            <div class="marks-breakdown">
                                <p><strong>Internal:</strong> ${academic.examMarks.internal.mathematics}/100</p>
                                <p><strong>Model:</strong> ${academic.examMarks.model.mathematics}/100</p>
                                <p><strong>Semester:</strong> ${academic.examMarks.semester.mathematics}/100</p>
                            </div>
                        </div>
                        <div class="subject-card">
                            <h6>Physics</h6>
                            <div class="marks-breakdown">
                                <p><strong>Internal:</strong> ${academic.examMarks.internal.physics}/100</p>
                                <p><strong>Model:</strong> ${academic.examMarks.model.physics}/100</p>
                                <p><strong>Semester:</strong> ${academic.examMarks.semester.physics}/100</p>
                            </div>
                        </div>
                        <div class="subject-card">
                            <h6>Chemistry</h6>
                            <div class="marks-breakdown">
                                <p><strong>Internal:</strong> ${academic.examMarks.internal.chemistry}/100</p>
                                <p><strong>Model:</strong> ${academic.examMarks.model.chemistry}/100</p>
                                <p><strong>Semester:</strong> ${academic.examMarks.semester.chemistry}/100</p>
                            </div>
                        </div>
                        <div class="subject-card">
                            <h6>English</h6>
                            <div class="marks-breakdown">
                                <p><strong>Internal:</strong> ${academic.examMarks.internal.english}/100</p>
                                <p><strong>Model:</strong> ${academic.examMarks.model.english}/100</p>
                                <p><strong>Semester:</strong> ${academic.examMarks.semester.english}/100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Extracurricular Activities -->
            <div class="performance-section">
                <h4>🎯 Extracurricular Activities</h4>

                <div class="certificates-section">
                    <h5>Certificates & Workshops</h5>
                    <div class="certificates-list">
    `;

    if (extracurricular.certificates && extracurricular.certificates.length > 0) {
        extracurricular.certificates.forEach(cert => {
            performanceHTML += `
                <div class="certificate-item">
                    <div class="certificate-icon">🏆</div>
                    <div class="certificate-details">
                        <h6>${cert.name}</h6>
                        <p><strong>Type:</strong> ${cert.type}</p>
                        <p><strong>Issuer:</strong> ${cert.issuer}</p>
                        <p><strong>Date:</strong> ${cert.date}</p>
                    </div>
                </div>
            `;
        });
    } else {
        performanceHTML += `<p>No certificates recorded.</p>`;
    }

    performanceHTML += `
                    </div>
                </div>

                <div class="events-section">
                    <h5>Event Participations</h5>
                    <div class="events-list">
    `;

    if (extracurricular.events && extracurricular.events.length > 0) {
        extracurricular.events.forEach(event => {
            performanceHTML += `
                <div class="event-item">
                    <div class="event-icon">🎪</div>
                    <div class="event-details">
                        <h6>${event.name}</h6>
                        <p><strong>Category:</strong> ${event.category}</p>
                        <p><strong>Position:</strong> ${event.position}</p>
                        <p><strong>Date:</strong> ${event.date}</p>
                    </div>
                </div>
            `;
        });
    } else {
        performanceHTML += `<p>No event participations recorded.</p>`;
    }

    performanceHTML += `
                    </div>
                </div>

                <div class="achievements-section">
                    <h5>Achievements & Awards</h5>
                    <div class="achievements-list">
    `;

    if (extracurricular.achievements && extracurricular.achievements.length > 0) {
        extracurricular.achievements.forEach(achievement => {
            performanceHTML += `
                <div class="achievement-item">
                    <span class="achievement-icon">⭐</span>
                    <span class="achievement-text">${achievement}</span>
                </div>
            `;
        });
    } else {
        performanceHTML += `<p>No achievements recorded.</p>`;
    }

    performanceHTML += `
                    </div>
                </div>
            </div>
        </div>
    `;

    contentDiv.innerHTML = performanceHTML;
    contentDiv.style.display = 'block';
    placeholderDiv.style.display = 'none';
}

function initializeAttendanceSummaryFilters() {
    const summaryStudentSelect = document.getElementById('summaryStudentFilter');
    if (summaryStudentSelect) {
        summaryStudentSelect.innerHTML = '<option value="all">All Students</option>';
        Object.keys(studentsData).forEach(studentId => {
            const option = document.createElement('option');
            option.value = studentId;
            option.textContent = `${studentId} - ${studentsData[studentId].name}`;
            summaryStudentSelect.appendChild(option);
        });
    }
}

function filterAttendanceSummary() {
    const studentFilter = document.getElementById('summaryStudentFilter').value;
    const dateFrom = document.getElementById('summaryDateFrom').value;
    const dateTo = document.getElementById('summaryDateTo').value;
    const subjectFilter = document.getElementById('summarySubjectFilter').value;

    const tbody = document.querySelector('#attendanceSummaryTable tbody');

    if (attendanceHistory.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 3rem; color: var(--erp-text-light);">
                    <div style="font-size: 1.2rem; margin-bottom: 1rem;">📊</div>
                    <div>No attendance history available</div>
                    <div style="font-size: 0.9rem; margin-top: 0.5rem;">Save some attendance data first to view the summary report.</div>
                </td>
            </tr>
        `;
        return;
    }

    // Filter attendance history by date range and subject
    let filteredHistory = [...attendanceHistory];

    if (dateFrom) {
        filteredHistory = filteredHistory.filter(record => record.date >= dateFrom);
    }
    if (dateTo) {
        filteredHistory = filteredHistory.filter(record => record.date <= dateTo);
    }
    if (subjectFilter !== 'all') {
        filteredHistory = filteredHistory.filter(record => record.subject === subjectFilter);
    }

    if (filteredHistory.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 3rem; color: var(--erp-text-light);">
                    <div style="font-size: 1.2rem; margin-bottom: 1rem;">🔍</div>
                    <div>No attendance records found for the selected filters</div>
                    <div style="font-size: 0.9rem; margin-top: 0.5rem;">Try adjusting your search criteria.</div>
                </td>
            </tr>
        `;
        return;
    }

    // Calculate summary for each student
    const studentSummaries = {};

    // Initialize all students
    const studentsToShow = studentFilter === 'all' ?
        Object.keys(studentsData) :
        [studentFilter];

    studentsToShow.forEach(studentId => {
        if (studentsData[studentId]) {
            studentSummaries[studentId] = {
                studentId: studentId,
                studentName: studentsData[studentId].name,
                totalWorkingDays: 0,
                presentDays: 0,
                morningSessions: 0,
                afternoonSessions: 0
            };
        }
    });

    // Process filtered attendance records
    filteredHistory.forEach(record => {
        record.attendanceData.forEach(attendance => {
            if (studentSummaries[attendance.studentId]) {
                const summary = studentSummaries[attendance.studentId];
                summary.totalWorkingDays++;

                if (attendance.status === 'Present') {
                    summary.presentDays++;
                }

                // Count session attendance only for present students
                if (attendance.status === 'Present') {
                    if (record.session === 'Morning') {
                        summary.morningSessions++;
                    } else if (record.session === 'Afternoon') {
                        summary.afternoonSessions++;
                    }
                }
            }
        });
    });

    // Generate table HTML
    let tableHTML = '';

    Object.values(studentSummaries).forEach(summary => {
        const leaveTaken = summary.totalWorkingDays - summary.presentDays;
        const attendancePercentage = summary.totalWorkingDays > 0 ?
            ((summary.presentDays / summary.totalWorkingDays) * 100).toFixed(2) : '0.00';

        let percentageClass = '';
        if (attendancePercentage >= 85) {
            percentageClass = 'style="color: #10b981; font-weight: 600;"'; // Green
        } else if (attendancePercentage >= 75) {
            percentageClass = 'style="color: #f59e0b; font-weight: 600;"'; // Orange
        } else {
            percentageClass = 'style="color: #ef4444; font-weight: 600;"'; // Red
        }

        tableHTML += `
            <tr>
                <td>${summary.studentId}</td>
                <td>${summary.studentName}</td>
                <td>${summary.totalWorkingDays}</td>
                <td>${summary.presentDays}</td>
                <td>${leaveTaken}</td>
                <td ${percentageClass}>${attendancePercentage}%</td>
                <td>${summary.morningSessions}</td>
                <td>${summary.afternoonSessions}</td>
            </tr>
        `;
    });

    tbody.innerHTML = tableHTML;
}

// Initialize attendance summary when the section is shown
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...

    // Initialize attendance summary dropdown
    const summaryStudentSelect = document.getElementById('summaryStudentFilter');
    if (summaryStudentSelect) {
        summaryStudentSelect.innerHTML = '<option value="all">All Students</option>';
        Object.keys(studentsData).forEach(studentId => {
            const option = document.createElement('option');
            option.value = studentId;
            option.textContent = `${studentId} - ${studentsData[studentId].name}`;
            summaryStudentSelect.appendChild(option);
        });
    }

    // Show initial attendance summary if on the page
    if (document.getElementById('attendanceSummarySection').style.display !== 'none') {
        filterAttendanceSummary();
    }
});

// Authentication functions
function checkAuthentication() {
    // Check if faculty is logged in
    const facultySession = sessionStorage.getItem('currentFaculty');
    if (facultySession) {
        currentFaculty = JSON.parse(facultySession);
        showMainApplication();
        updateFacultyHeader();
    } else {
        showLoginPage();
    }
}

function attemptLogin() {
    const facultyId = document.getElementById('facultyId').value.trim();
    const password = document.getElementById('facultyPassword').value;

    // Clear any previous error
    document.getElementById('loginError').style.display = 'none';

    // Validate input
    if (!facultyId || !password) {
        showLoginError('Please enter both Faculty ID and password.');
        return;
    }

    // Allow any faculty ID and password combination for demo purposes
    // Create a generic faculty profile for the entered ID
    currentFaculty = {
        id: facultyId,
        name: facultyId.includes('AMS') ? `Dr. ${facultyId.replace('AMS', '')} Kumar` : `Dr. ${facultyId}`,
        department: 'Information Technology',
        designation: 'Associate Professor',
        password: password,
        email: `${facultyId.toLowerCase()}@amsce.edu.in`,
        phone: '+91 9876543210'
    };

    sessionStorage.setItem('currentFaculty', JSON.stringify(currentFaculty));

    showMainApplication();
    updateFacultyHeader();
}

function showLoginError(message) {
    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';

    // Clear password field
    document.getElementById('facultyPassword').value = '';
}

function showLoginPage() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('mainContent').style.display = 'none';
    document.querySelector('header').style.display = 'none';

    // Clear any existing session
    currentFaculty = null;
    sessionStorage.removeItem('currentFaculty');
}

function showMainApplication() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.querySelector('header').style.display = 'block';

    // Load saved data
    loadFromLocalStorage();

    // Auto-fill current date
    const today = new Date();
    const dateField = document.getElementById("attendanceDate");
    dateField.value = today.toISOString().split('T')[0];

    // Initialize table with default values
    updateTableHeader();
    updateStatistics();

    // Initialize student form
    initializeStudentForm();

    // Add event listeners for status changes
    const selects = document.querySelectorAll('.status-select');
    selects.forEach(select => {
        select.addEventListener('change', updateStatistics);
    });

    // Make student names clickable
    makeStudentNamesClickable();

    // Show default section (attendance entry)
    showSection('attendance-entry');
}

function updateFacultyHeader() {
    if (currentFaculty) {
        // Add faculty info to header
        const headerContent = document.querySelector('.header-content');
        let facultyInfoDiv = document.getElementById('facultyInfo');

        if (!facultyInfoDiv) {
            facultyInfoDiv = document.createElement('div');
            facultyInfoDiv.id = 'facultyInfo';
            facultyInfoDiv.className = 'faculty-info';
            headerContent.appendChild(facultyInfoDiv);
        }

        facultyInfoDiv.innerHTML = `
            <div class="info-item">
                <span class="label">Faculty:</span>
                <span class="value">${currentFaculty.name}</span>
            </div>
            <div class="info-item">
                <span class="label">Department:</span>
                <span class="value">${currentFaculty.department}</span>
            </div>
        `;
    }
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear session
        currentFaculty = null;
        sessionStorage.removeItem('currentFaculty');

        // Hide main content and show login
        showLoginPage();

        alert('Logged out successfully!');
    }
}

// Note: All initialization is now handled in the single DOMContentLoaded listener at the top of the file
