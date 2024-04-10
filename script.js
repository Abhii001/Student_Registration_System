// Store student records
let students = []

// Function to add a new student
function addStudent (event) {
  event.preventDefault() // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value
  const idCardNum = document.getElementById('idCardNum').value
  const className = document.getElementById('class').value
  const address = document.getElementById('address').value
  const contact = document.getElementById('contact').value
  const email = document.getElementById('email').value

  // Create student object
  const student = {
    name,
    idCardNum,
    class: className,
    address,
    contact,
  email}

  // Add student to array
  students.push(student)

  // Update table
  displayStudents()

  // Clear form fields
  document.getElementById('student-form').reset()
}

// Function to display student records in table
function displayStudents () {
  const recordsBody = document.getElementById('records-body')
  recordsBody.innerHTML = '' // Clear existing records

  // Loop through students array and populate table
  students.forEach((student, index) => {
    const row = document.createElement('tr')
    row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.idCardNum}</td>
            <td>${student.class}</td>
            <td>${student.address}</td>
            <td>${student.contact}</td>
            <td>${student.email}</td>
            <td>
                <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        `
    recordsBody.appendChild(row)
  })
}

// Function to edit a student record
function editStudent (index) {
  const student = students[index]
  const name = prompt('Enter new name:', student.name)
  const idCardNum = prompt('Enter new student ID:', student.idCardNum)
  const className = prompt('Enter new class:', student.class)
  const address = prompt('Enter new address:', student.address)
  const contact = prompt('Enter new contact number:', student.contact)
  const email = prompt('Enter new contact email:', student.email)

  if (name && idCardNum && className && address && contact && email) {
    students[index] = { name, idCardNum, class: className, address, contact,  email}
    displayStudents()
  }
}

// Function to delete a student record
function deleteStudent (index) {
  const confirmDelete = confirm('Are you sure you want to delete this student record?')
  if (confirmDelete) {
    students.splice(index, 1)
    displayStudents()
  }
}

//event listener to form submission
document.getElementById('student-form').addEventListener('submit', addStudent)

// Initial display of student records
displayStudents()
