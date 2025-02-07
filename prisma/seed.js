// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.userChapter.deleteMany();
        await prisma.userCourse.deleteMany();
        await prisma.material.deleteMany();
        await prisma.assessment.deleteMany();
        await prisma.assignment.deleteMany();
        await prisma.courseChapter.deleteMany();
        await prisma.chapter.deleteMany();
        await prisma.course.deleteMany();
        await prisma.user.deleteMany();

        // Create Users
        const hashedPassword = await bcrypt.hash('password', 10);
    
        const admin = await prisma.user.create({
        data: {
            username: 'archico',
            password: hashedPassword,
            name: 'Archico',
            role: 'ADMIN'
        }
        });

        const instructor = await prisma.user.create({
        data: {
            username: 'rafael',
            password: hashedPassword,
            name: 'Rafael ',
            role: 'INSTRUCTOR',
            instructorId: '11S21028',
            instructorCourses: 0
        }
        });

    const student = await prisma.user.create({
        data: {
            username: 'benhard',
            password: hashedPassword,
            name: 'Benhard',
            role: 'STUDENT',
            studentId: '11S21003',
            points: 0,
            totalCourses: 0,
            badges: 0
        }
    });

    // Create Courses
    const course1 = await prisma.course.create({
        data: {
            code: 'IMK',
            name: 'Interaksi Manusia Komputer'
        }
    });

    const course2 = await prisma.course.create({
        data: {
            code: 'DASPRO',
            name: 'Dasar Pemrograman'
        }
    });

    // Create Chapters
    const chapter1 = await prisma.chapter.create({
        data: {
            name: 'Introduction',
            description: 'Pengantar Interaksi Manusia Komputer',
            level: 1,
            courseId: course1.id  // Langsung menghubungkan ke course
        }
    });

    const chapter2 = await prisma.chapter.create({
        data: {
            name: 'Fundamentals of Design',
            description: 'Fundamental Desain',
            level: 2,
            courseId: course1.id
        }
    });

    // Create Materials
    await prisma.material.create({
      data: {
        chapterId: chapter1.id,
        name: 'Course Overview',
        content: 'SKS, Peraturan, Silabus'
      }
    });

    // Create Assessments
    await prisma.assessment.create({
      data: {
        chapterId: chapter1.id,
        instruction: 'Complete the following quiz',
        orderNumber: 1,
        questions: JSON.stringify([
          {
            question: 'What does HTML stand for?',
            options: [
              'Hyper Text Markup Language',
              'High Tech Modern Language',
              'Hyper Transfer Markup Language',
              'None of the above'
            ]
          }
        ]),
        answers: JSON.stringify(['Hyper Text Markup Language'])
      }
    });

    // Create Assignments
    await prisma.assignment.create({
      data: {
        chapterId: chapter1.id,
        instruction: 'Install a Figma',
        fileUrl: 'assignments/figma-basics.pdf'
      }
    });

    // Create User Course Enrollments
    await prisma.userCourse.create({
      data: {
        userId: student.id,
        courseId: course1.id
      }
    });

    // Create User Chapter Progress
    await prisma.userChapter.create({
      data: {
        userId: student.id,
        chapterId: chapter1.id,
        isCompleted: false,
        materialDone: false,
        assessmentDone: false,
        assignmentDone: false,
        assessmentAnswer: JSON.stringify([]),
        assessmentGrade: 0
      }
    });

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });