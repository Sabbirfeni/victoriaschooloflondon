// {
//      courseId: 1,
//     courseName: "Course 1",
//     country: "UK",
//     university: "Placeholder University",
//     campus: "Main Campus",
//     level: "Bachelor's",
//     scholarship: "Up to 50%",
//     tuitionFees: "10,000",
// },

const courses = [
  {
    courseId: 1,
    courseName:
      "Honours Bachelor of Applied Arts in Social Justice & Legal Studies",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Skilled Trades Regional Training Centre",
    level: "Undergraduate",
    scholarship: "Up to $1000",
    tuitionFees: "$15931",
  },
  {
    courseId: 2,
    courseName: "Strategic Project Management",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Skilled Trades Regional Training Centre",
    level: "Undergraduate",
    scholarship: "Upto 10000",
    tuitionFees: "$15931",
  },
  {
    courseId: 3,
    courseName:
      "Honours Bachelor of Business Administration (Information Communication Technology)",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Skilled Trades Regional Training Centre",
    level: "Undergraduate",
    scholarship: "Up to $1000",
    tuitionFees: "$15931",
  },
  {
    courseId: 4,
    courseName: "Strategic Project Management",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Main Windsor Campus",
    level: "Undergraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$15931",
  },
  {
    courseId: 5,
    courseName: "Construction Project Management",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Main Windsor Campus",
    level: "Undergraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$15931",
  },
  {
    courseId: 6,
    courseName:
      "Honours Bachelor of Applied Arts in Social Justice & Legal Studies",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Main Windsor Campus",
    level: "Undergraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$15931",
  },
  {
    courseId: 7,
    courseName:
      "Honours Bachelor of Business Administration (Information Communication Technology)",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Main Windsor Campus",
    level: "Undergraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$15931",
  },
  {
    courseId: 8,
    courseName:
      "Honours Bachelor of Business Administration (Information Communication Technology)",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Main Windsor Campus",
    level: "Undergraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$15931",
  },
  {
    courseId: 9,
    courseName:
      "Honours Bachelor of Applied Arts in Social Justice & Legal Studies",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Main Windsor Campus",
    level: "Undergraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$15931",
  },
  {
    courseId: 10,
    courseName: "MSc in IT for Business Data Analytics",
    country: "Hungary",
    university: "International Business School",
    campus: "Budapest",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€12800",
  },
  {
    courseId: 11,
    courseName: "MSc in Strategic Marketing",
    country: "Hungary",
    university: "International Business School",
    campus: "Budapest",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€12800",
  },
  {
    courseId: 12,
    courseName: "MSc in Strategic Finance",
    country: "Hungary",
    university: "International Business School",
    campus: "Budapest",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€12800",
  },
  {
    courseId: 13,
    courseName: "MSc in Strategic",
    country: "Hungary",
    university: "International Business School",
    campus: "Budapest",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€12800",
  },
  {
    courseId: 14,
    courseName: "MSc in Strategic Human Resource Management",
    country: "Hungary",
    university: "International Business School",
    campus: "Budapest",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€12800",
  },
  {
    courseId: 15,
    courseName: "MSc in International Management",
    country: "Hungary",
    university: "International Business School",
    campus: "Budapest",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€12800",
  },
  {
    courseId: 16,
    courseName: "MSc Physics",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Postgraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€7500",
  },
  {
    courseId: 17,
    courseName: "MSc Molecular Biology",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Postgraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€7500",
  },
  {
    courseId: 18,
    courseName: "MSc ​Hydrobiology - Water Quality Management",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Postgraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€7500",
  },
  {
    courseId: 19,
    courseName: "MSc Geoinformatic",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Postgraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€7500",
  },
  {
    courseId: 20,
    courseName: "BSc ​Physics",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Undergraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€6500",
  },
  {
    courseId: 21,
    courseName: "BSc Mathematics",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Undergraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€6500",
  },
  {
    courseId: 22,
    courseName: "BSc ​Geography",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Undergraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€6500",
  },
  {
    courseId: 23,
    courseName: "BSc Earth Sciences",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Undergraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€6500",
  },
  {
    courseId: 24,
    courseName: "BSc Chemistry",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Undergraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€6500",
  },
];

export { courses };
