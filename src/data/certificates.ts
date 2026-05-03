//sertifikat cover
import sertifBnsp from "@/assets/certificates/bnsp/bnsp.png";
import sertifbsb from"@/assets/certificates/pkl bsb/sertif bsb.png";
import sertifITCC from "@/assets/certificates/ITCCCOM/juara unud.jpeg";
import sertifLKS from "@/assets/certificates/LKS/LKS Juara.jpeg";
import sertifDigiBali from "@/assets/certificates/digibali/sertif digibali.jpeg";

//gambar kenangangan
//bsnp
//pkl bsb
import bsb1 from "@/assets/certificates/pkl bsb/gambar1.jpg";
import bsb2 from "@/assets/certificates/pkl bsb/gambar 2.jpg";
import bsb3 from "@/assets/certificates/pkl bsb/gambar3.jpg";
import bsb4 from "@/assets/certificates/pkl bsb/sertif bsb.png";

//pkldigibali
import digi1 from "@/assets/certificates/digibali/harngtag.png";
import digi2 from "@/assets/certificates/digibali/kidspon.png";

export interface CertificateDetail {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
  about: string;
  challenge: string;
  howIFacedIt: string;
  learnings: string[];
  gallery: string[];
}

export const certificates: CertificateDetail[] = [
  {
    id: "1",
    title: "UKK Junior Developer Certification",
    issuer: "SMKN 1 Denpasar",
    date: "February 2026",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    about:
      "For my final competency project, I was challenged to build an Automated Academic Grading System from scratch using the C language. I focused on creating a robust system that handles student data entry and subject grading with strict input validation—ensuring the program prompts for a re-input if the format is incorrect. I also implemented a final verification step to ensure data integrity before the system automatically generates and exports the final report into a .txt file format.",
    challenge:
      "The most challenging part was stripping away the convenience of modern frameworks and facing the raw logic of C. Relearning data structures and manual memory management required a high level of discipline and a complete shift in how I approached problem-solving. I had to master advanced database concepts and complex case studies under pressure to ensure I was ready for any scenario.",
    howIFacedIt:
      "I treated every study case as a real-world problem, focusing on clean code and efficient algorithms. During the final assessment, this rigorous preparation paid off; I successfully answered all of the assessor’s technical questions in less than 5 minutes. I achieved a perfect score on the written test—covering database management and logical case studies—resulting in an \"Excellent\" final grade.",
    learnings: [
      "I mastered complex conditional logic to handle input errors and data verification, ensuring a \"zero-error\" user experience.",
      "I followed strict guidelines to implement structured programming, making the code efficient and easy to maintain.",
      "I gained hands-on experience in File Handling (I/O) by automating the export of system data into external text files.",
      "I developed the ability to create program specifications that translate complex manual grading into a digital workflow.",
    ],
    gallery: [
    ],
  },
  {
    id: "2",
    title: "Internship Program in Full Stack Development",
    issuer: "PT. BaliSolutionBiz",
    date: "Desember 2025",
    imageUrl: sertifbsb,
    about:
      "A rigorous internship program focused on building real-world full-stack applications. The curriculum included advanced JavaScript, Blade Templates for front-end development, Laravel for back-end development, and MySQL for database management. The capstone project involved designing and deploying a complete web application with user authentication, data visualization, and RESTful APIs.",
    challenge:
      "The most significant challenge was managing the complexity of a full-stack application. Integrating the front-end from the design and developing the back-end, ensuring secure authentication, and optimizing database queries were all areas where I had limited prior experience. Additionally, deploying the application to a production environment introduced new challenges around configuration and debugging.",
    howIFacedIt:
      "I took a systematic approach to learning, starting with building small components and gradually integrating them into a larger application. I also made extensive use of online resources, documentation, and community forums to troubleshoot issues. For deployment, I experimented with different hosting platforms and learned about environment variables, server configuration, and monitoring tools.",
    learnings: [
      "Building dynamic and user-friendly interfaces with Laravel & Tailwind CSS and managing state effectively",
      "Database modelling with MySQL and writing performant queries",
      "Deploying, monitoring, and debugging apps in production environments",
    ],
    gallery: [
      bsb4,
      bsb1,
      bsb2,
      bsb3,
    ],
  },
  {
    id: "3",
    title: "Internship Program in DigiBali Creative Agency & Advertising",
    issuer: "Digibali",
    date: "March 2025",
    imageUrl: sertifDigiBali,
    about:
      "Starting my internship at DigiBali was an unexpected turn in my career path. Initially seeking a web-focused role, I found myself immersed in the fast-paced world of a creative agency and professional printing house. What began as a challenge eventually became a transformative experience where I learned the entire lifecycle of a creative business—from initial client consultation to the final physical product.",
    challenge:
      "The steep learning curve involved mastering the technicalities of \"print-ready\" files. I had to learn how to translate a digital design into a perfect physical output, ensuring colors and dimensions were accurate before sending them to production. Balancing the roles of a customer service representative, graphic designer, and production team member while meeting tight deadlines taught me the true meaning of high-pressure multitasking.",
    howIFacedIt:
      "I embraced the multifaceted nature of the agency by diving deep into every department. I utilized Adobe Illustrator (AI) and Photoshop (PS) to create diverse products, including custom packaging, brochures, and promotional materials. Beyond design, I acted as a bridge between the client’s vision and the production reality, managing time and prioritizing tasks to ensure every project was delivered with quality and precision.",
    learnings: [
      "I gained a deep understanding of how a creative agency operates, from client handling (CS) to production management and final delivery.",
      "I mastered the art of creating \"Print-Ready\" files and physical product design, ensuring digital visuals translate perfectly to physical media.",
      "Working in a high-demand environment taught me how to identify high-priority tasks and manage multiple project deadlines efficiently.",
      "I sharpened my soft skills in teamwork and client communication, learning how to handle various customer needs and technical requirements.",
    ],
    gallery: [
      digi1,
      digi2,
    ],
  },
  {
    id: "4",
    title: "3rd Winner of LKS IT SOFWARE SOLUTON FOR BUSINESS",
    issuer: "Dinas Pendidikan Provinsi Bali",
    date: "March 2025",
    imageUrl: sertifLKS,
    about:
      "In this competitive arena, I was tasked with building a fully functional mobile e-commerce application for camera sales, covering everything from secure login to product selection. This project was a true test of my technical agility, as I had to deliver a production-ready mobile solution within a very tight competition timeframe.",
    challenge:
      "The biggest challenge was the technology stack itself. Prior to the competition, I had zero experience with Android Studio, Kotlin, or Jetpack Compose. I had to push my limits by self-studying these modern mobile development tools in just one week before the event. Mastering state management, UI components, and the Kotlin syntax in such a short period while maintaining high design standards was an intense mental marathon.",
    howIFacedIt:
      "I focused on high-priority features first to ensure a functional MVP (Minimum Viable Product). I applied my existing UI/UX principles to Jetpack Compose to ensure the camera store felt premium and intuitive. By leveraging my fundamental understanding of software logic, I successfully implemented a smooth user flow from authentication to checkout, resulting in a robust application that secured 3rd Place.",
    learnings: [
      "I proved my ability to master complex new frameworks like Jetpack Compose and Kotlin within a 7-day deadline.",
      "I learned to implement modern mobile design patterns and navigation flows specifically for e-commerce environments.",
      "I developed the mental resilience to debug and optimize mobile applications in a high-stakes competitive setting.",
      "I gained fundamental knowledge of how to manage data states and user interactions in a reactive mobile UI framework.",
    ],
    gallery: [
    ],
  },
  {
    id: "5",
    title: "BNSP UI/UX/Junior Graphic Designer Certification",
    issuer: "BNSP Program By Telkom DigiUp",
    date: "March 2025",
    imageUrl: sertifBnsp,
    about:
      "Earning this national certification was a rigorous test of my dedication and technical skills. As my first professional bootcamp experience, I had to balance an intensive daily training schedule with my regular school responsibilities. From attending daily lectures to completing hands-on design assignments, I pushed myself to maintain a high standard of work while staying active in every discussion.",
    challenge:
      "The pressure peaked during the final assessment, where I was challenged to create a complete UI/UX project from scratch in only one hour. This was followed by a technical interview with a professional assessor to defend my design decisions and methodology. Managing the mental fatigue of balancing academic duties and this fast-paced bootcamp required extreme discipline and efficient time management.",
    howIFacedIt:
      "I took an active learning approach, consistently engaging with mentors and answering technical questions during sessions, which earned me excellent feedback and high scores from the instructors. For the final project, I focused on a \"speed-design\" strategy—prioritizing core user flows and high-fidelity visual hierarchy to ensure a polished result within the 60-minute limit. My ability to articulate the \"why\" behind my designs during the presentation was key to securing my certification.",
    learnings: [
      "I aligned my design workflow with national competency standards for UI/UX and multimedia design.",
      "I mastered the ability to deliver high-quality, functional prototypes under extreme time constraints (60-minute sprint).",
      "I developed the resilience to manage multiple high-stakes priorities simultaneously without compromising quality.",
      "I sharpened my skills in defending design choices and communicating user-centric solutions to professional assessors.",
    ],
    gallery: [
    ],
  },
  {
    id: "6",
    title: "ITCC TechCOM 2024 - 2nd Winner of UI/UX Design Competition \"PINDAI\"",
    issuer: "Udayana University",
    date: "November 2025",
    imageUrl: sertifITCC,
    about:
      "This was my first foray into a professional UI/UX design competition as a team leader, competing on a national stage against prestigious schools and universities from all over Indonesia. I was responsible for orchestrating the entire workflow, ensuring every team member had a clear job description and was aligned with our collective goals. Managing time effectively and fostering an environment of mutual trust was crucial in transforming our initial idea into a high-impact digital solution that could stand out among a competitive pool of national talents.",
    challenge:
      "The primary challenge was addressing the lack of digital security awareness among Indonesian youth in a way that didn't feel like a chore. We had to conduct deep user research and surveys to understand the pain points of our target audience. Translating those survey results into features that are both educational and \"fun\" required intense brainstorming and multiple iterations of our user flows and wireframes to ensure our message remained effective and innovative.",
    howIFacedIt:
      "We took a data-driven approach by basing every design decision on our initial user research. I led the team through the full design lifecycle: from creating detailed flowcharts and wireframes to developing a high-fidelity interactive prototype in Figma. During the final pitch, we presented our vision with such clarity that we were able to answer every judge's question in less than 5 minutes, ultimately securing 2nd Place Nationwide.",
    learnings: [
      "I mastered the ability to lead a design team through a full project lifecycle, from ideation to high-fidelity prototyping, under tight deadlines.",
      "I developed strong communication and presentation skills to effectively convey design concepts and rationale to stakeholders.",
      "I learned the importance of user-centered design and how to integrate user feedback into the development process.",
      "I gained experience in managing and motivating a team under pressure, ensuring that everyone was aligned with the project goals.",
    ],
    gallery: [
    ],
  }
];