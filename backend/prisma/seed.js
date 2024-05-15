const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Seed alumni_details
  await prisma.alumni_details.createMany({
    data: [
      {
        name: 'John Doe',
        regno: 'A12345',
        department: 'Computer Science',
        phone: '1234567890',
        email: 'johndoe@example.com',
        image: 'johndoe.jpg',
        domain: 'Software Development',
        company: 'Tech Corp',
        city: 'New York',
        pass_year: '2010'
      },
      {
        name: 'Jane Smith',
        regno: 'B67890',
        department: 'Mechanical Engineering',
        phone: '0987654321',
        email: 'janesmith@example.com',
        image: 'janesmith.jpg',
        domain: 'Automotive',
        company: 'Auto Inc',
        city: 'Los Angeles',
        pass_year: '2012'
      },
      {
        name: 'Robert Brown',
        regno: 'C11223',
        department: 'Electrical Engineering',
        phone: '1112223333',
        email: 'robertbrown@example.com',
        image: 'robertbrown.jpg',
        domain: 'Electronics',
        company: 'Electro Ltd',
        city: 'Chicago',
        pass_year: '2014'
      },
      {
        name: 'Emily White',
        regno: 'D44556',
        department: 'Civil Engineering',
        phone: '4445556666',
        email: 'emilywhite@example.com',
        image: 'emilywhite.jpg',
        domain: 'Construction',
        company: 'BuildIt',
        city: 'Houston',
        pass_year: '2016'
      },
      {
        name: 'Michael Green',
        regno: 'E77889',
        department: 'Information Technology',
        phone: '7778889999',
        email: 'michaelgreen@example.com',
        image: 'michaelgreen.jpg',
        domain: 'Networking',
        company: 'Net Solutions',
        city: 'San Francisco',
        pass_year: '2018'
      }
    ]
  });

  // Seed alumni_interaction_program
  await prisma.alumni_interaction_program.createMany({
    data: [
      {
        alumni_name: 'John Doe',
        department: 'Computer Science',
        date: '2023-05-10',
        time: '10:00 AM',
        venue: 'Main Auditorium',
        title: 'Career in Software Development',
        email: 'johndoe@example.com'
      },
      {
        alumni_name: 'Jane Smith',
        department: 'Mechanical Engineering',
        date: '2023-06-15',
        time: '2:00 PM',
        venue: 'Engineering Hall',
        title: 'Advancements in Automotive Technology',
        email: 'janesmith@example.com'
      },
      {
        alumni_name: 'Robert Brown',
        department: 'Electrical Engineering',
        date: '2023-07-20',
        time: '11:00 AM',
        venue: 'Tech Center',
        title: 'The Future of Electronics',
        email: 'robertbrown@example.com'
      },
      {
        alumni_name: 'Emily White',
        department: 'Civil Engineering',
        date: '2023-08-25',
        time: '3:00 PM',
        venue: 'Building A',
        title: 'Sustainable Construction Practices',
        email: 'emilywhite@example.com'
      },
      {
        alumni_name: 'Michael Green',
        department: 'Information Technology',
        date: '2023-09-30',
        time: '4:00 PM',
        venue: 'IT Conference Room',
        title: 'Networking in the Modern Era',
        email: 'michaelgreen@example.com'
      }
    ]
  });

  // Seed staff_details
  await prisma.staff_details.createMany({
    data: [
      {
        name: 'Dr. Alan Johnson',
        department: 'Computer Science',
        id: 'CS001',
        phone: '1112223333',
        email: 'alanjohnson@example.com',
        image: 'alanjohnson.jpg',
        domain: 'Artificial Intelligence',
        doj: '2015-01-10',
        college_name: 'Tech University',
        description: 'Expert in AI and machine learning with over 10 years of experience.',
        experience: '10 years'
      },
      {
        name: 'Dr. Linda Brown',
        department: 'Mechanical Engineering',
        id: 'ME002',
        phone: '2223334444',
        email: 'lindabrown@example.com',
        image: 'lindabrown.jpg',
        domain: 'Thermodynamics',
        doj: '2016-05-15',
        college_name: 'Engineering College',
        description: 'Specialist in thermodynamics and heat transfer.',
        experience: '8 years'
      },
      {
        name: 'Prof. William Lee',
        department: 'Electrical Engineering',
        id: 'EE003',
        phone: '3334445555',
        email: 'williamlee@example.com',
        image: 'williamlee.jpg',
        domain: 'Microelectronics',
        doj: '2017-08-20',
        college_name: 'Institute of Technology',
        description: 'Focused on microelectronics and VLSI design.',
        experience: '7 years'
      },
      {
        name: 'Prof. Susan Green',
        department: 'Civil Engineering',
        id: 'CE004',
        phone: '4445556666',
        email: 'susangreen@example.com',
        image: 'susangreen.jpg',
        domain: 'Structural Engineering',
        doj: '2018-09-25',
        college_name: 'Civil Tech College',
        description: 'Expert in structural analysis and design.',
        experience: '6 years'
      },
      {
        name: 'Dr. James Wilson',
        department: 'Information Technology',
        id: 'IT005',
        phone: '5556667777',
        email: 'jameswilson@example.com',
        image: 'jameswilson.jpg',
        domain: 'Cybersecurity',
        doj: '2019-11-30',
        college_name: 'IT University',
        description: 'Specialist in cybersecurity and network security.',
        experience: '5 years'
      }
    ]
  });

  // Seed student_details
  await prisma.student_details.createMany({
    data: [
      {
        name: 'Alice Brown',
        regno: 'S12345',
        department: 'Computer Science',
        pass_year: '2024',
        image: 'alicebrown.jpg',
        domain: 'Software Development',
        college_name: 'Tech University',
        phone: '1234567890',
        email: 'alicebrown@example.com',
        city: 'New York',
        aoi: 'AI',
        alumni_interaction: 'John Doe'
      },
      {
        name: 'Bob Smith',
        regno: 'S67890',
        department: 'Mechanical Engineering',
        pass_year: '2024',
        image: 'bobsmith.jpg',
        domain: 'Automotive',
        college_name: 'Engineering College',
        phone: '0987654321',
        email: 'bobsmith@example.com',
        city: 'Los Angeles',
        aoi: 'Thermodynamics',
        alumni_interaction: 'Jane Smith'
      },
      {
        name: 'Charlie Johnson',
        regno: 'S11223',
        department: 'Electrical Engineering',
        pass_year: '2024',
        image: 'charliejohnson.jpg',
        domain: 'Electronics',
        college_name: 'Institute of Technology',
        phone: '1112223333',
        email: 'charliejohnson@example.com',
        city: 'Chicago',
        aoi: 'Microelectronics',
        alumni_interaction: 'Robert Brown'
      },
      {
        name: 'David Lee',
        regno: 'S44556',
        department: 'Civil Engineering',
        pass_year: '2024',
        image: 'davidlee.jpg',
        domain: 'Construction',
        college_name: 'Civil Tech College',
        phone: '4445556666',
        email: 'davidlee@example.com',
        city: 'Houston',
        aoi: 'Structural',
        alumni_interaction: 'Emily White'
      },
      {
        name: 'Eva Green',
        regno: 'S77889',
        department: 'Information Technology',
        pass_year: '2024',
        image: 'evagreen.jpg',
        domain: 'Networking',
        college_name: 'IT University',
        phone: '7778889999',
        email: 'evagreen@example.com',
        city: 'San Francisco',
        aoi: 'Cybersecurity',
        alumni_interaction: 'Michael Green'
      }
    ]
  });

  // Seed student_staff_interaction
  await prisma.student_staff_interaction.createMany({
    data: [
      {
        name: 'Alice Brown',
        regno: 'S12345',
        domain: 'AI',
        department: 'Computer Science',
        pass_year: '2024',
        regarding: 'Research Opportunities',
        date: '2024-05-10',
        time: '10:00 AM',
        status: 'approved'
      },
      {
        name: 'Bob Smith',
        regno: 'S67890',
        domain: 'Thermodynamics',
        department: 'Mechanical Engineering',
        pass_year: '2024',
        regarding: 'Internship Possibilities',
        date: '2024-06-15',
        time: '2:00 PM',
        status: 'pending'
      },
      {
        name: 'Charlie Johnson',
        regno: 'S11223',
        domain: 'Microelectronics',
        department: 'Electrical Engineering',
        pass_year: '2024',
        regarding: 'Project Guidance',
        date: '2024-07-20',
        time: '11:00 AM',
        status: 'approved'
      },
      {
        name: 'David Lee',
        regno: 'S44556',
        domain: 'Structural',
        department: 'Civil Engineering',
        pass_year: '2024',
        regarding: 'Thesis Review',
        date: '2024-08-25',
        time: '3:00 PM',
        status: 'pending'
      },
      {
        name: 'Eva Green',
        regno: 'S77889',
        domain: 'Cybersecurity',
        department: 'Information Technology',
        pass_year: '2024',
        regarding: 'Coursework Doubts',
        date: '2024-09-30',
        time: '4:00 PM',
        status: 'approved'
      }
    ]
  });
  await prisma.student_alumni_interaction.createMany({
    data: [
      {
        name: 'Alice Brown',
        regno: 'S12345',
        domain: 'AI',
        department: 'Computer Science',
        pass_year: '2024',
        regarding: 'Research Opportunities',
        date: '2024-05-10',
        time: '10:00 AM',
        status: 'approved'
      },
      {
        name: 'Bob Smith',
        regno: 'S67890',
        domain: 'Thermodynamics',
        department: 'Mechanical Engineering',
        pass_year: '2024',
        regarding: 'Internship Possibilities',
        date: '2024-06-15',
        time: '2:00 PM',
        status: 'pending'
      },
      {
        name: 'Charlie Johnson',
        regno: 'S11223',
        domain: 'Microelectronics',
        department: 'Electrical Engineering',
        pass_year: '2024',
        regarding: 'Project Guidance',
        date: '2024-07-20',
        time: '11:00 AM',
        status: 'approved'
      },
      {
        name: 'David Lee',
        regno: 'S44556',
        domain: 'Structural',
        department: 'Civil Engineering',
        pass_year: '2024',
        regarding: 'Thesis Review',
        date: '2024-08-25',
        time: '3:00 PM',
        status: 'pending'
      },
      {
        name: 'Eva Green',
        regno: 'S77889',
        domain: 'Cybersecurity',
        department: 'Information Technology',
        pass_year: '2024',
        regarding: 'Coursework Doubts',
        date: '2024-09-30',
        time: '4:00 PM',
        status: 'approved'
      }
    ]
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
