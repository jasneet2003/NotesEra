// Define the semesters object outside the event listeners
const semesters = {
    '1': ['1', '2'],
    '2': ['3', '4'],
    '3': ['5', '6'],
    '4': ['7', '8'],
  };
  
  // Update semester dropdown on initial page load and when the year selection changes
  document.getElementById('year').addEventListener('change', function() {
    const selectedYear = document.getElementById('year').value;
    const semesterDropdown = document.getElementById('semester');
    semesterDropdown.innerHTML = '<option value="all">All Semesters</option>';
    if (selectedYear !== 'all') {
      semesters[selectedYear].forEach(sem => {
        const option = document.createElement('option');
        option.value = sem;
        option.textContent = `Semester ${sem}`;
        semesterDropdown.appendChild(option);
      });
    }
  });
  
  document.getElementById('submitBtn').addEventListener('click', function() {
    const selectedCollege = document.getElementById('college').value;
    const selectedYear = document.getElementById('year').value;
    const selectedSemester = document.getElementById('semester').value;
    const wantsNotes = document.getElementById('notes').checked;
    const wantsPapers = document.getElementById('papers').checked;
  
    // Dummy values for courses
    const courses = [
      // First Year
      { name: 'Introduction to Programming', college: 'all', year: '1', semester: '1', type: 'notes' },
      { name: 'Mathematics for Computer Science', college: 'all', year: '1', semester: '1', type: 'notes' },
      { name: 'Digital Logic and Design', college: 'all', year: '1', semester: '1', type: 'notes' },
      { name: 'Computer Organization and Architecture', college: 'all', year: '1', semester: '1', type: 'notes' },
      { name: 'Communication Skills', college: 'all', year: '1', semester: '1', type: 'notes' },
      { name: 'Data Structures and Algorithms', college: 'all', year: '1', semester: '2', type: 'papers' },
      { name: 'Object-Oriented Programming (OOP)', college: 'all', year: '1', semester: '2', type: 'papers' },
      { name: 'Discrete Mathematics', college: 'all', year: '1', semester: '2', type: 'papers' },
      { name: 'Database Management Systems (DBMS)', college: 'all', year: '1', semester: '2', type: 'papers' },
      { name: 'Environmental Studies', college: 'all', year: '1', semester: '2', type: 'both' },
  
      // Second Year
      { name: 'Operating Systems', college: 'all', year: '2', semester: '3', type: 'notes' },
      { name: 'Software Engineering', college: 'all', year: '2', semester: '3', type: 'notes' },
      { name: 'Computer Networks', college: 'all', year: '2', semester: '3', type: 'notes' },
      { name: 'Web Development', college: 'all', year: '2', semester: '3', type: 'notes' },
      { name: 'Probability and Statistics', college: 'all', year: '2', semester: '3', type: 'notes' },
      { name: 'Design and Analysis of Algorithms', college: 'all', year: '2', semester: '4', type: 'papers' },
      { name: 'System Programming', college: 'all', year: '2', semester: '4', type: 'papers' },
      { name: 'Human-Computer Interaction (HCI)', college: 'all', year: '2', semester: '4', type: 'papers' },
      { name: 'Theory of Computation', college: 'all', year: '2', semester: '4', type: 'papers' },
      { name: 'Technical Communication', college: 'all', year: '2', semester: '4', type: 'both' },
  
      // Third Year
      { name: 'Artificial Intelligence', college: 'all', year: '3', semester: '5', type: 'notes' },
      { name: 'Compiler Design', college: 'all', year: '3', semester: '5', type: 'notes' },
      { name: 'Distributed Systems', college: 'all', year: '3', semester: '5', type: 'notes' },
      { name: 'Cloud Computing', college: 'all', year: '3', semester: '5', type: 'notes' },
      { name: 'Elective I (e.g., Mobile App Development, Big Data Analytics)', college: 'all', year: '3', semester: '5', type: 'notes' },
      { name: 'Machine Learning', college: 'all', year: '3', semester: '6', type: 'papers' },
      { name: 'Cryptography and Network Security', college: 'all', year: '3', semester: '6', type: 'papers' },
      { name: 'Internet of Things (IoT)', college: 'all', year: '3', semester: '6', type: 'papers' },
      { name: 'Elective II (e.g., Natural Language Processing, Robotics)', college: 'all', year: '3', semester: '6', type: 'papers' },
      { name: 'Summer Internship', college: 'all', year: '3', semester: '6', type: 'both' },
  
      // Fourth Year
      { name: 'Software Testing and Quality Assurance', college: 'all', year: '4', semester: '7', type: 'notes' },
      { name: 'Elective III (e.g., Data Mining, Image Processing)', college: 'all', year: '4', semester: '7', type: 'notes' },
      { name: 'Elective IV (e.g., Bioinformatics, Game Development)', college: 'all', year: '4', semester: '7', type: 'notes' },
      { name: 'Project Phase-I', college: 'all', year: '4', semester: '7', type: 'notes' },
      { name: 'Professional Ethics and Values', college: 'all', year: '4', semester: '8', type: 'papers' },
      { name: 'Elective V (e.g., Cybersecurity, Cloud Infrastructure)', college: 'all', year: '4', semester: '8', type: 'papers' },
      { name: 'Project Phase-II', college: 'all', year: '4', semester: '8', type: 'papers' },
      { name: 'Seminar', college: 'all', year: '4', semester: '8', type: 'papers' },
    ];
  
    // Filter courses based on user selections
    const filteredCourses = courses.filter(course => {
      return (
        (course.college === selectedCollege || selectedCollege === 'all') &&
        (course.year === selectedYear || selectedYear === 'all') &&
        (course.semester === selectedSemester || selectedSemester === 'all') &&
        (wantsNotes && course.type === 'notes') ||
        (wantsPapers && course.type === 'papers') ||
        (wantsNotes && wantsPapers && course.type === 'both')
      );
    });
  
    // Display the matching courses
    const coursesList = document.getElementById('coursesList');
    coursesList.innerHTML = '';
  
    if (filteredCourses.length === 0) {
      coursesList.innerHTML = '<p>No matching courses found.</p>';
    } else {
      const listItems = filteredCourses.map(course => {
        return `<li>${course.name}</li>`;
      });
  
      coursesList.innerHTML = `<ul>${listItems.join('')}</ul>`;
    }
  });
  
  // Trigger the change event on initial page load to populate the semester dropdown
  document.getElementById('year').dispatchEvent(new Event('change'));
  