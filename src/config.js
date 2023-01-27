import me from '../src/Assets/Images/me.jpg'

export default{
    //general
    email:"dhananjayy6397@gmail.com",
    image_url:me,
    resume_link:"https://drive.google.com/file/d/19yOhbncnuDJJACCXc6SkPqZsB-sxjYzB/view?usp=share_link",//with https:// otherwise the link might not work
    repo_link:"https://github.com/humaneBicycle/portfolio",//link to this repo with https:// otherwise the link might not work
    //main section on the top
    name:"Dhananjay",
    intro_one_liner:"I am a Graphic and Web designer.",
    short_main_intro:"Welcome to my portfolio website! I am an graphic and web designer, dedicated to honing my skills and continuously seeking new opportunities to improve. My work, showcased on this website, browse my portfolio to see the solutions I can offer for your business or organization.",

    //about me section
    p1:"I am a mechanical engineering student at National Institute of Technology, Hamirpur, with a passion for creating innovative and efficient solutions. My experience in web designing, combined with my skills in freelancing, make me a well-rounded devsigner capable of handling a wide range of projects.",
    p2:"I have worked on several android and web projects, including an admin panel for an edtech app, an android application for shortlisting clients based on location, and a pdf reader app. These projects have allowed me to gain valuable experience in developing user-friendly designs.",
    p3:"In addition to my technical skills, I am a dedicated and hardworking individual who is always eager to learn and improve. As a class representative at NIT Hamirpur and a volunteer for the esports club, I have developed strong leadership and teamwork skills.",
    p4:"I am looking for opportunities to showcase my skills and continue developing my abilities as a software developer. I am excited to take on new challenges and to contribute to the development of cutting-edge technologies.",
    skills:["Figma","Adobe illustrator","Sketch","Adobe photoshope","prototyping"],

    //social links
    github:"https://github.com/dhananjayyy007",
    instagram:"https://www.instagram.com/dhananjayyy007",
    twitter:"https://twitter.com/AbhayaSood",
    linkedin:"https://www.linkedin.com/in/dhananjay-chaddha-44a870223/",

    //projects
    projects:[//leave links empty if not available  
        {
            title:"PDF Reader App: Sangharsh",
            description:"A freelancing project which consisted of a pdf reader app built on android that can have multiple folders nested in themself like a file explorer and several PDFs inside them. The folders and pdfs can be created, updated, and deleted from the admin app. The entire App is built on Firebase as the backend and Admob wes integrated. A referal system was designed and implemented in the app. It has more than 10k downloads on Play Store",
            image_url:"https://ik.imagekit.io/jpnn4qofy/Portfolio/pdf-app.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674503519710",
            skills:["Figma","Adobe Photoshope","Aobe Illustrator"],
            github_link:"",
            live_link:"https://play.google.com/store/apps/details?id=com.pdf.questions"

        },

        {
            title:"Admin Panel: Full Stack Edtech App",
            description:"An admin panel in reactJS which handles CRUD for a frontend android application which is deployed on Netlify and the backend as nodeJS server deployed on Heroku. The Video lessons for the app are uploaded to AWS S3 and are converted to various qualities using AWS Mediaconvert. The security layer is implemented using JWT Tokens. ",
            image_url:"https://ik.imagekit.io/jpnn4qofy/Portfolio/edtech-compressed.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674496287969",
            skills:["Figma","Adobe Photoshope","Aobe Illustrator"],
            github_link:"",
            live_link:"https://quasar-edtech-admin.netlify.app/"

        },
        
        // {
        //     title:"A Fitness App: BestOfY",
        //     description:"I developed an android fitness app called BestOfY, which allows users to access wide range of exercises and workout plans. The app also includes features such as progress tracking, workout reminders, and social sharing. The admin app is also build on android. ",
        //     image_url:"https://source.unsplash.com/random/",
        //     skills:["Android","Firebase","Firebase Auth"],
        //     github_link:"",
        //     live_link:""

        // },
    ],

    //contact me section
    description:"I am currently seeking employment opportunities in which I can utilize my skills and experience to make a positive impact on the organization. I am open to exploring a variety of industries and roles and am dedicated to continuously learning and growing in my career.",

}
