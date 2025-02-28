const { PrismaClient } = require("@prisma/client");

let quizzesPrisma: any;

const quizzes = [
  {
    title: "Computer Science Basics",
    description: "A quiz about fundamental computer science concepts.",
    categoryId: "67bd53a58d93e22f0637eb37", // Replace with the actual category ID
  },
  {
    title: "Programming Fundamentals",
    description: "Test your knowledge of basic programming concepts.",
    categoryId: "67bd53a58d93e22f0637eb36",
  },
  {
    title: "Data Structures",
    description: "Assess your understanding of data structures.",
    categoryId: "67bd53a58d93e22f0637eb36",
  },
  {
    title: "Physics",
    description: "Test your knowledge of physics",
    categoryId: "67bd54e349121c251542a400",
  },
  {
    title: "Biology",
    description: "Test your knowledge of physics",
    categoryId: "67bd54e449121c251542a401",
  },
  {
    title: "Chemistry",
    description: "Test your knowledge of physics",
    categoryId: "67bd54e349121c251542a400",
  },
];

async function seedQuizzes() {
  quizzesPrisma = new PrismaClient();

  console.log("Seeding quizzes...");

  for (const quiz of quizzes) {
    const craetedQuiz = await quizzesPrisma.quiz.create({
      data: quiz,
    });

    console.log("Created quiz: ", `${craetedQuiz.title}`);
  }

  console.log("Seeding quizzes completed.");
}

seedQuizzes()
  .catch((e) => {
    console.log("Error seeding quizzes: ", e);
  })
  .finally(async () => {
    await quizzesPrisma.$disconnect();
  });