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

  {
    courseId: 25,
    courseName: "Foundation Program Business",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Foundation",
    scholarship: "TBA",
    tuitionFees: "€8000",
  },

  {
    courseId: 26,
    courseName: "BSc Applied Data Science",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€8000",
  },

  {
    courseId: 27,
    courseName: "BSc International Management",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€8000",
  },

  {
    courseId: 28,
    courseName: "BBA Tourism and Hospitality Management",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€8000",
  },

  {
    courseId: 29,
    courseName: "BSc International Management with Professional Experience",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€7700",
  },

  {
    courseId: 30,
    courseName: "BBA Tourism, Hotel Management & Operations",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€8000",
  },

  {
    courseId: 31,
    courseName: "MSc in Management",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€6000",
  },

  {
    courseId: 32,
    courseName: "Master of Business Administration (MBA)",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€10500",
  },

  {
    courseId: 33,
    courseName: "MSc in International Tourism Management",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€6000",
  },

  {
    courseId: 34,
    courseName: "MSc in Sustainable Development, Management and Policy",
    country: "Austria",
    university: "Modul University",
    campus: "Vienna",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€6000",
  },

  {
    courseId: 35,
    courseName: "BSc Chemistry",
    country: "Hungary",
    university: "University of Debrecen",
    campus: "Hungary",
    level: "Undergraduate",
    scholarship: "30% of annual fees",
    tuitionFees: "€6500",
  },

  {
    courseId: 36,
    courseName:
      "Honours Bachelor of Business Administration (Information Communication Technology)",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Chatham Campus",
    level: "Undergraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$15931",
  },

  {
    courseId: 37,
    courseName:
      "Honours Bachelor of Applied Arts in Social Justice & Legal Studies",
    country: "CANADA",
    university: "St. Clair College",
    campus: "Chatham Campus",
    level: "Undergraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$15931",
  },

  {
    courseId: 38,
    courseName: "Master of Computer Science",
    country: "CANADA",
    university: "Algoma University",
    campus: "Brampton",
    level: "Postgraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$15931",
  },

  {
    courseId: 39,
    courseName: "Justice",
    country: "Cyprus",
    university: "Cyprus West University",
    campus: "North Cyprus",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€5500",
  },

  {
    courseId: 40,
    courseName: "Computer Engineering",
    country: "Cyprus",
    university: "Cyprus West University",
    campus: "North Cyprus",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€5500",
  },

  {
    courseId: 41,
    courseName: "Law",
    country: "Cyprus",
    university: "Cyprus West University",
    campus: "North Cyprus",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€5500",
  },

  {
    courseId: 42,
    courseName: "Logistics",
    country: "Cyprus",
    university: "Cyprus West University",
    campus: "North Cyprus",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€5500",
  },

  {
    courseId: 43,
    courseName: "Guidance and Psychological Counselling",
    country: "Cyprus",
    university: "Cyprus West University",
    campus: "North Cyprus",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€5500",
  },

  {
    courseId: 44,
    courseName: "Business Administration",
    country: "Cyprus",
    university: "Cyprus West University",
    campus: "North Cyprus",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€5500",
  },

  {
    courseId: 45,
    courseName: "Information System Engineering",
    country: "Cyprus",
    university: "Cyprus West University",
    campus: "North Cyprus",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€5500",
  },

  {
    courseId: 46,
    courseName: "Masters of Business Administration (MBA)",
    country: "Cyprus",
    university: "Cyprus West University",
    campus: "North Cyprus",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€6000",
  },

  {
    courseId: 47,
    courseName: "Ms International Marketing",
    country: "Malta",
    university: "College de Paris",
    campus: "Malta",
    level: "Postgraduate",
    scholarship: "Not Available right now",
    tuitionFees: "€6500",
  },

  {
    courseId: 48,
    courseName: "Bachelor in Business Administration",
    country: "Malta",
    university: "College de Paris",
    campus: "Malta",
    level: "Undergraduate",
    scholarship: "Not Available right now",
    tuitionFees: "€11000",
  },

  {
    courseId: 49,
    courseName: "Bachelor in Interior Design",
    country: "Malta",
    university: "College de Paris",
    campus: "Malta",
    level: "Undergraduate",
    scholarship: "Not Available right now",
    tuitionFees: "€11000",
  },

  {
    courseId: 50,
    courseName: "Bachelor in Interior Design",
    country: "Malta",
    university: "College de Paris",
    campus: "Malta",
    level: "Undergraduate",
    scholarship: "Not Available right now",
    tuitionFees: "€11000",
  },
   {
    courseId: 51,
    courseName: "MBA International MBA",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 52,
    courseName: "BSc Architectural Technology",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 53,
    courseName: "BA(Hons) Architecture",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 54,
    courseName: "BA (Hons) Art and Design with Creative Technologies",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 55,
    courseName: "BA (Hons) The Art Business (Level 6 Top-Up)",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 56,
    courseName: "BEng (Hons) Automotive Engineering",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 57,
    courseName: "BEng (Hons) Biomedical Engineering",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 58,
    courseName: "BSc (Hons) Biomedical Sciences",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 59,
    courseName: "BSc (Hons) Business Administration (TOP-UP)",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 60,
    courseName: "BSc (Hons) Business Finance",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 61,
    courseName: "BSc (Hons) Business Information Technology",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 62,
    courseName: "BA (Hons) Business Management",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 63,
    courseName: "BA (Hons) Business with Marketing",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 64,
    courseName: "BEng (Hons) Civil Engineering",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
   {
    courseId: 65,
    courseName: "BSc (Hons) Computer Games Technology",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Undergraduate",
    scholarship: "€1000",
    tuitionFees: "€16085",
  },
    {
    courseId: 66,
    courseName: "MBA International MBA",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€19020",
  },
      {
    courseId: 67,
    courseName: "MSc Computer Science",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€16870",
  },
      {
    courseId: 68,
    courseName: "MSc Construction Project Management",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
      {
    courseId: 69,
    courseName: "MSc Cyber Security",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
      {
    courseId: 70,
    courseName: "MA Fashion Management",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
      {
    courseId: 71,
    courseName: "LLM International Business Law",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€19020",
  },
      {
    courseId: 72,
    courseName: "MA International Human Resource Management course",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
      {
    courseId: 73,
    courseName: "MSc Islamic Finance",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
      {
    courseId: 74,
    courseName: "MA Luxury Brand Management",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
      {
    courseId: 75,
    courseName: "MSc Management and Finance",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€16870",
  },
      {
    courseId: 76,
    courseName: "MSc Management and International Business",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
      {
    courseId: 77,
    courseName: "MSc Management and Marketing",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
        {
    courseId: 78,
    courseName: "MSc Accounting and Finance",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
        {
    courseId: 79,
    courseName: "MSc Advanced Computer Networks",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€17710",
  },
        {
    courseId: 80,
    courseName: "MA Acting",
    country: "United Kingdom",
    university: "Birmingham City University",
    campus: "Birmingham",
    level: "Postgraduate",
    scholarship: "€1000",
    tuitionFees: "€19020",
  },

  {
    courseId: 81,
    courseName: "BA (Hons) International Business",
    country: "United Kingdom",
    university: "Wrexham Glyndwr University",
    campus: "Wrexham",
    level: "Undergraduate",
    scholarship: "",
    tuitionFees: "GBP 11500.00 ",
  },
    {
    courseId: 82,
    courseName: "Business Management - BA (Hons)",
    country: "United Kingdom",
    university: "London Metropolitan University",
    campus: "London",
    level: "Undergraduate",
    scholarship: "",
    tuitionFees: "GBP 17600.00 ",
  },
  
    {
    courseId: 83,
    courseName: "BA (Hons) Rural Business Management",
    country: "United Kingdom",
    university: "Scotland Rural College",
    campus: "Barony",
    level: "Undergraduate",
    scholarship: "",
    tuitionFees: "GBP 16000.00 ",
  },

  {
    courseId: 84,
    courseName: "BA in Business ",
    country: "Ireland",
    university: "Griffith College ",
    campus: "Dublin",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "€13,500 Yearly  ",
  },
  
  {
    courseId: 85,
    courseName: "Bachelor of Business",
    country: "Ireland",
    university: "Dublin Business School",
    campus: "Dublin",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "EUR 10050 Yearly ",
  },
      
  {
    courseId: 86,
    courseName: "Bachelor of Arts (Honours) in Business",
    country: "Ireland",
    university: "Holmes Institute Dublin",
    campus: "Dublin",
    level: "Undergraduate",
    scholarship: "TBA",
    tuitionFees: "EUR 10,000 Yearly ",
  },

  {
    courseId: 87,
    courseName: "Business Management with Business Analytics BSc (Hons)",
    country: "United Kingdom",
    university: "University of Bedfordshire",
    campus: "Luton",
    level: "Undergraduate",
    scholarship: "",
    tuitionFees: "GBP 15500 Yearly",
  },

    {
    courseId: 88,
    courseName: "BSc (Hons) Business Management",
    country: "United Kingdom",
    university: "University of East London",
    campus: "Stratford",
    level: "Undergraduate",
    scholarship: "",
    tuitionFees: "GBP 15560.00",
  },

   {
    courseId: 89,
    courseName: "Business Management BA (Hons)",
    country: "United Kingdom",
    university: "Coventry University",
    campus: "Coventry",
    level: "Undergraduate",
    scholarship: "",
    tuitionFees: "GBP 16800 Yearly",
  },

  {
    courseId: 90,
    courseName: "Business Management - BA (Hons)",
    country: "United Kingdom",
    university: "London Metropolitan University",
    campus: "London",
    level: "Undergraduate",
    scholarship: "",
    tuitionFees: "GGBP 17600 Yearly",
  },
   {
    courseId: 91,
    courseName: "Master of Computer Science",
    country: "CANADA",
    university: "Algoma University",
    campus: "Brampton",
    level: "Postgraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$24532",
  },
   {
    courseId: 92,
    courseName: "Master's of Science in Biology",
    country: "CANADA",
    university: "Algoma University",
    campus: "Sault Ste. Marie",
    level: "Postgraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$24532",
  },
   {
    courseId: 93,
    courseName: "Master of Computer Science",
    country: "CANADA",
    university: "Algoma University",
    campus: "Sault Ste. Marie",
    level: "Postgraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: " $24532",
  },
   {
    courseId: 94,
    courseName: "MSc Biology",
    country: "CANADA",
    university: "Algoma University",
    campus: "Sault Ste. Marie",
    level: "Postgraduate",
    scholarship: "Upto 10000 CAD",
    tuitionFees: "$24034",
  },

   {
    courseId: 95,
    courseName: "BA (Hons) Business and Management",
    country: "Malta",
    university: "GBS Malta",
    campus: "Malta",
    level: "Undergraduate",
    scholarship: "Not Available right now",
    tuitionFees: "€6000",
  },
   {
    courseId: 96,
    courseName: "Master in Business Administration Online",
    country: "Malta",
    university: "GBS Malta",
    campus: "Malta",
    level: "Postgraduate",
    scholarship: "Upto 30%",
    tuitionFees: "€10000",
  },
   {
    courseId: 97,
    courseName: "Award in Information Technology and Study Skills",
    country: "Malta",
    university: "GBS Malta",
    campus: "Malta",
    level: "Postgraduate",
    scholarship: "Not Available right now",
    tuitionFees: "€5000",
  },
   {
    courseId: 98,
    courseName: "Award in Business, Management and Study Skills",
    country: "Malta",
    university: "GBS Malta",
    campus: "Malta",
    level: "Postgraduate",
    scholarship: "Not Available right now",
    tuitionFees: "€5000",
  },
   {
    courseId: 99,
    courseName: "MA Business and Management",
    country: "Malta",
    university: "GBS Malta",
    campus: "Malta",
    level: "Postgraduate",
    scholarship: "Not Available right now",
    tuitionFees: "€7000",
  },
   {
    courseId: 100,
    courseName: "MA Marketing and Brand Management",
    country: "Malta",
    university: "GBS Malta",
    campus: "Malta",
    level: "Postgraduate",
    scholarship: "upto 30%",
    tuitionFees: "€7000",
  },

    {
    courseId: 101,
    courseName: "BA (Hons) Financial Management and Accounting",
    country: "Poland",
    university: "Coventry University",
    campus: "Wrocław",
    level: "Undergraduate",
    scholarship: "Upto 30%",
    tuitionFees: "46000 PLN",
  },
     {
    courseId: 102,
    courseName: "BSc (Hons) Cyber Security",
    country: "Poland",
    university: "Coventry University",
    campus: "Wrocław",
    level: "Undergraduate",
    scholarship: "Upto 30%",
    tuitionFees: "46000 PLN",
  },
     {
    courseId: 103,
    courseName: "BA (Hons) Business Management and Leadership",
    country: "Poland",
    university: "Coventry University",
    campus: "Wrocław",
    level: "Undergraduate",
    scholarship: "Upto 30%",
    tuitionFees: "46000 PLN",
  },
     {
    courseId: 104,
    courseName: "BSc (Hons) Aviation Management",
    country: "Poland",
    university: "Coventry University",
    campus: "Wrocław",
    level: "Undergraduate",
    scholarship: "Upto 30%",
    tuitionFees: "46000 PLN",
  },
     {
    courseId: 105,
    courseName: "BSc (Hons) Computing Science",
    country: "Poland",
    university: "Coventry University",
    campus: "Wrocław",
    level: "Undergraduate",
    scholarship: "Upto 30%",
    tuitionFees: "46000 PLN",
  },
     {
    courseId: 106,
    courseName: "BSc (Hons) Applied Psychology",
    country: "Poland",
    university: "Coventry University",
    campus: "Wrocław",
    level: "Undergraduate",
    scholarship: "Upto 30%",
    tuitionFees: "46000 PLN",
  },
     {
    courseId: 107,
    courseName: "BSc (Hons) Applied Biosciences",
    country: "Poland",
    university: "Coventry University",
    campus: "Wrocław",
    level: "Undergraduate",
    scholarship: "Upto 30%",
    tuitionFees: "46000 PLN",
  },
      {
    courseId: 108,
    courseName: "Warehouse Logistics",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
  
     {
    courseId: 109,
    courseName: "Sustainable Business Model",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 110,
    courseName: "Sustainability Management",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 111,
    courseName: "Sports Dietetics",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 112,
    courseName: "Social Communication and PR",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 113,
    courseName: "Road Transport and Forwarding Logistics",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 114,
    courseName: "Computer Science",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 115,
    courseName: "Quantitative Methods in Economics",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 116,
    courseName: "Psychology of Business",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 117,
    courseName: "Psychology in Human Capital Management",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 118,
    courseName: "Psychodietetics",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 119,
    courseName: "Process and Project Management",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 120,
    courseName: "Political Science",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 121,
    courseName: "New Media",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 122,
    courseName: "MBA International Business",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 123,
    courseName: "Business Management",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 124,
    courseName: "Managerial Finance",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 125,
    courseName: "International Relations",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 126,
    courseName: "Finance and International Markets",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
       {
    courseId: 127,
    courseName: "Finance and Accounting Audit and Controlling",
    country: "Poland",
    university: "University of Economics and Human Science in Warsaw",
    campus: "Warsaw",
    level: "Postgraduate",
    scholarship: "TBA",
    tuitionFees: "€3900",
  },
  
    
];

export default courses;
