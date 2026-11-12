(function () {
    var STORAGE_KEY = 'siteLang';

    var km = {
        'Loading...': 'កំពុងផ្ទុក...',
        'Home': 'ទំព័រដើម',
        'About': 'អំពីយើង',
        'Services': 'សេវាកម្ម',
        'Courses': 'វគ្គសិក្សា',
        'Pages': 'ទំព័រ',
        'Enroll': 'ចុះឈ្មោះ',
        'Instructors': 'គ្រូបង្គោល',
        'Testimonials': 'មតិអ្នករៀន',
        'Contact': 'ទំនាក់ទំនង',
        'Enroll Now': 'ចុះឈ្មោះឥឡូវ',
        'About Us': 'អំពីយើង',
        'Our Services': 'សេវាកម្មរបស់យើង',
        'Enroll Online': 'ចុះឈ្មោះតាមអនឡាញ',
        'Contact Us': 'ទំនាក់ទំនងយើង',
        'Our Partners': 'ដៃគូរបស់យើង',
        'All Pages': 'គ្រប់ទំព័រ',
        'Office Hours': 'ម៉ោងធ្វើការ',
        'Monday - Friday': 'ចន្ទ - សុក្រ',
        'Saturday - Sunday': 'សៅរ៍ - អាទិត្យ',
        '8:00 AM - 7:30 PM': '8:00 ព្រឹក - 7:30 ល្ងាច',
        '8:30 AM - 11:30 AM': '8:30 ព្រឹក - 11:30 ព្រឹក',
        ', All Right Reserved.': ', រក្សាសិទ្ធិគ្រប់យ៉ាង។',
        'English': 'អង់គ្លេស',

        'Learn Today, Lead Tomorrow': 'រៀនថ្ងៃនេះ ដឹកនាំថ្ងៃស្អែក',
        'Stop dreaming,': 'ឈប់គ្រាន់តែស្រមៃ,',
        'start doing.': 'ចាប់ផ្តើមអនុវត្ត។',
        'Welcome to': 'សូមស្វាគមន៍មកកាន់',
        'I-Tech Media is your fast-track to in-demand digital expertise. We offer practical, industry-relevant training in Media and Information Technology.': 'I-Tech Media គឺជាផ្លូវរហ័សរបស់អ្នកទៅកាន់ជំនាញឌីជីថលដែលទីផ្សារត្រូវការ។ យើងផ្តល់ការបណ្តុះបណ្តាលជាក់ស្តែង និងពាក់ព័ន្ធនឹងឧស្សាហកម្ម ក្នុងផ្នែកមេឌៀ និងបច្ចេកវិទ្យាព័ត៌មាន។',
        'Whether you are a beginner or looking to advance your career, our hands-on courses in Computer Office, Graphic Design, Video Editing, 3D Design, Animation, and more are designed to prepare you for real-world success.': 'មិនថាអ្នកទើបចាប់ផ្តើម ឬចង់ជំរុញអាជីពរបស់អ្នកនោះទេ វគ្គសិក្សាអនុវត្តផ្ទាល់ដៃរបស់យើង ដូចជា Computer Office, រចនាក្រាហ្វិក, កាត់តវីដេអូ, 3D Design, ចលនា និងច្រើនទៀត ត្រូវបានរៀបចំឡើងដើម្បីរៀបចំអ្នកឱ្យទទួលបានជោគជ័យក្នុងពិភពពិត។',
        'Explore Our Courses': 'ស្វែងយល់វគ្គសិក្សា',
        'Practical Learning': 'ការរៀនជាក់ស្តែង',
        'Creative Skills': 'ជំនាញច្នៃប្រឌិត',
        'Career Focused': 'ផ្តោតលើអាជីព',
        'Graphic Design': 'រចនាក្រាហ្វិក',
        'Video Editing': 'កាត់តវីដេអូ',
        'Expert Instructors': 'គ្រូបង្គោលជំនាញ',
        'Learn from experienced trainers who work in the digital industry.': 'រៀនពីគ្រូបង្ហាត់ដែលមានបទពិសោធន៍ និងកំពុងធ្វើការក្នុងឧស្សាហកម្មឌីជីថល។',
        'Hands-On Learning': 'ការរៀនអនុវត្តផ្ទាល់ដៃ',
        'Practice on real projects in modern computer and media labs.': 'អនុវត្តលើគម្រោងពិត ក្នុងមន្ទីរកុំព្យូទ័រ និងមេឌៀទំនើប។',
        'Pearson Certification': 'វិញ្ញាបនបត្រ Pearson',
        'Prepare for internationally recognized Pearson and Microsoft certifications.': 'រៀបចំខ្លួនសម្រាប់វិញ្ញាបនបត្រ Pearson និង Microsoft ដែលទទួលស្គាល់ជាអន្តរជាតិ។',
        'Career Support': 'ការគាំទ្រអាជីព',
        'Build a portfolio and get guidance for the digital workplace.': 'កសាងផលប័ត្រការងារ និងទទួលបានការណែនាំសម្រាប់ការងារឌីជីថល។',
        'Creative Media Studio': 'ស្ទូឌីយោមេឌៀច្នៃប្រឌិត',
        'Design, film, edit and animate in our dedicated production labs.': 'រចនា ថត កាត់ត និងបង្កើតចលនា ក្នុងមន្ទីរផលិតកម្មដែលបានបម្រុងទុក។',
        'Flexible Class Times': 'ម៉ោងរៀនបត់បែន',
        'Study in the morning, evening or weekend around your schedule.': 'រៀនពេលព្រឹក ល្ងាច ឬចុងសប្តាហ៍ តាមកាលវិភាគរបស់អ្នក។',
        'Affordable Training': 'ការបណ្តុះបណ្តាលតម្លៃសមរម្យ',
        'High-quality IT and digital media training at an accessible cost.': 'ការបណ្តុះបណ្តាល IT និងមេឌៀឌីជីថលគុណភាពខ្ពស់ ក្នុងតម្លៃសមរម្យ។',
        'Certification Exams': 'ការប្រឡងវិញ្ញាបនបត្រ',
        'Earn credentials that employers in Cambodia and abroad recognize.': 'ទទួលបានលិខិតបញ្ជាក់ដែលនិយោជកក្នុងកម្ពុជា និងក្រៅប្រទេសទទួលស្គាល់។',
        'I-Tech Media is a media and digital skills training center in Phnom Penh specializing in IT education and professional certification programs.': 'I-Tech Media គឺជាមជ្ឈមណ្ឌលបណ្តុះបណ្តាលជំនាញមេឌៀ និងឌីជីថលនៅភ្នំពេញ ដែលឯកទេសលើការអប់រំ IT និងកម្មវិធីវិញ្ញាបនបត្រអាជីព។',
        'Our mission is to empower a new generation of Cambodian professionals with high-quality, practical and affordable IT and digital media training.': 'បេសកកម្មរបស់យើងគឺផ្តល់អំណាចដល់ជំនាន់ថ្មីនៃអ្នកជំនាញកម្ពុជា តាមរយៈការបណ្តុះបណ្តាល IT និងមេឌៀឌីជីថល ដែលមានគុណភាពខ្ពស់ ជាក់ស្តែង និងតម្លៃសមរម្យ។',
        'Years of': 'ឆ្នាំនៃ',
        'Experience': 'បទពិសោធន៍',
        'Courses &': 'វគ្គសិក្សា &',
        'Programs': 'កម្មវិធី',
        'Read More': 'អានបន្ថែម',
        'Our Courses': 'វគ្គសិក្សារបស់យើង',
        'Popular Programs': 'កម្មវិធីពេញនិយម',
        'Creative': 'ច្នៃប្រឌិត',
        'Design & Media': 'រចនា និងមេឌៀ',
        '3D & Animation': '3D និងចលនា',
        'IT & Certifications': 'IT និងវិញ្ញាបនបត្រ',
        'Certificate': 'វិញ្ញាបនបត្រ',
        'Logo, branding and layout design using industry tools.': 'រចនាឡូហ្គោ អត្តសញ្ញាណម៉ាក និងប្លង់ ដោយប្រើឧបករណ៍វិជ្ជាជីវៈ។',
        'UX/UI Design': 'រចនា UX/UI',
        'Research, wireframes and interface design for apps and websites.': 'ការស្រាវជ្រាវ wireframe និងរចនាចំណុចប្រទាក់សម្រាប់កម្មវិធី និងគេហទំព័រ។',
        'Edit, color and deliver professional video content.': 'កាត់ត កែពណ៌ និងផលិតខ្លឹមសារវីដេអូវិជ្ជាជីវៈ។',
        'Photography': 'ការថតរូប',
        'Camera skills, lighting and composition for events and products.': 'ជំនាញកាមេរ៉ា ពន្លឺ និងការរៀបចំរូប សម្រាប់កម្មវិធី និងផលិតផល។',
        'Videography': 'ការថតវីដេអូ',
        'Plan, shoot and produce video for social media and clients.': 'រៀបចំផែនការ ថត និងផលិតវីដេអូសម្រាប់បណ្តាញសង្គម និងអតិថិជន។',
        '3D Modeling & Rendering (A)': 'ការបង្កើត និងបង្ហាញគំរូ 3D (A)',
        'Model and texture assets for products, games and animation.': 'បង្កើត និងដាក់វាយនភាពលើធនធានសម្រាប់ផលិតផល ហ្គេម និងចលនា។',
        '3D Modeling & Rendering (B)': 'ការបង្កើត និងបង្ហាញគំរូ 3D (B)',
        'Advanced modeling, lighting and realistic rendering.': 'ការបង្កើតគំរូកម្រិតខ្ពស់ ពន្លឺ និងការបង្ហាញបែបពិត។',
        '3D Animation': 'ចលនា 3D',
        'Animate characters and motion graphics in 3D.': 'បង្កើតចលនាតួអង្គ និងក្រាហ្វិកចលនាជា 3D។',
        'Computer Office': 'កុំព្យូទ័រការិយាល័យ',
        '60 Hours': '60 ម៉ោង',
        'Word, Excel, PowerPoint and digital workplace essentials.': 'Word, Excel, PowerPoint និងជំនាញចាំបាច់សម្រាប់ការងារឌីជីថល។',
        'Deploy and manage Windows devices in a modern workplace.': 'ដំឡើង និងគ្រប់គ្រងឧបករណ៍ Windows ក្នុងបរិស្ថានការងារទំនើប។',
        'Build programming fundamentals and prepare for certification.': 'កសាងមូលដ្ឋានគ្រឹះនៃការសរសេរកម្មវិធី និងរៀបចំសម្រាប់វិញ្ញាបនបត្រ។',
        'Artificial intelligence concepts and certification preparation.': 'គំនិតបញ្ញាសិប្បនិម្មិត និងការរៀបចំសម្រាប់វិញ្ញាបនបត្រ។',
        'Design and implement data solutions on Microsoft Azure.': 'រចនា និងអនុវត្តដំណោះស្រាយទិន្នន័យលើ Microsoft Azure។',
        'Core AI and machine learning concepts on Azure.': 'គំនិតស្នូលនៃ AI និង machine learning លើ Azure។',
        'Enrollment': 'ការចុះឈ្មោះ',
        'Full Name': 'ឈ្មោះពេញ',
        'Your Email': 'អ៊ីមែលរបស់អ្នក',
        'Preferred Start Date': 'កាលបរិច្ឆេទចាប់ផ្តើមដែលចង់បាន',
        'Select a course': 'ជ្រើសរើសវគ្គសិក្សា',
        'Course Of Interest': 'វគ្គសិក្សាដែលចាប់អារម្មណ៍',
        'Questions / Special Request': 'សំណួរ / សំណើពិសេស',
        'Questions or special request': 'សំណួរ ឬសំណើពិសេស',
        'Submit Application': 'ដាក់ស្នើពាក្យសុំ',
        'Our Team': 'ក្រុមការងាររបស់យើង',
        'Our Instructors': 'គ្រូបង្គោលរបស់យើង',
        'Student Testimonials': 'មតិអ្នករៀន',
        'Meet Our Instructors': 'ជួបគ្រូបង្គោលរបស់យើង',
        'Design Instructor': 'គ្រូបង្គោលរចនា',
        'UX/UI Instructor': 'គ្រូបង្គោល UX/UI',
        'Video Instructor': 'គ្រូបង្គោលវីដេអូ',
        'Photo & Video Instructor': 'គ្រូបង្គោលរូបថត និងវីដេអូ',
        '3D Modeling Instructor': 'គ្រូបង្គោលគំរូ 3D',
        '3D Animation Instructor': 'គ្រូបង្គោលចលនា 3D',
        'Computer Office Instructor': 'គ្រូបង្គោលកុំព្យូទ័រការិយាល័យ',
        'IT Certification Trainer': 'គ្រូបណ្តុះបណ្តាលវិញ្ញាបនបត្រ IT',
        'Photography & Videography': 'ការថតរូប និងថតវីដេអូ',
        '3D Modeling & Rendering': 'ការបង្កើត និងបង្ហាញគំរូ 3D',
        'Pearson & Microsoft': 'Pearson និង Microsoft',
        'What Our Students Say': 'អ្វីដែលសិស្សរបស់យើងនិយាយ',
        'The instructors explained everything step by step. I now edit videos confidently for my own business.': 'គ្រូបានពន្យល់គ្រប់អ្វីមួយមួយជំហានម្តងៗ។ ឥឡូវខ្ញុំកាត់តវីដេអូដោយទំនុកចិត្តសម្រាប់អាជីវកម្មផ្ទាល់ខ្លួនរបស់ខ្ញុំ។',
        'Video Editing Student': 'សិស្សកាត់តវីដេអូ',
        'Freelance video editor': 'អ្នកកាត់តវីដេអូឯករាជ្យ',
        'Studying for the Pearson certification at I-Tech Media helped me understand the IT field and prepare for a real job.': 'ការរៀនសម្រាប់វិញ្ញាបនបត្រ Pearson នៅ I-Tech Media បានជួយខ្ញុំឱ្យយល់ពីវិស័យ IT និងរៀបចំខ្លួនសម្រាប់ការងារពិតប្រាកដ។',
        'IT Certification Student': 'សិស្សវិញ្ញាបនបត្រ IT',
        'Pearson IT Specialist': 'អ្នកជំនាញ IT របស់ Pearson',
        'Flexible class times let me study while working. The 3D animation class was the best part of my week.': 'ម៉ោងរៀនដែលបត់បែនបានឱ្យខ្ញុំរៀនពេលកំពុងធ្វើការ។ ថ្នាក់ចលនា 3D គឺជាផ្នែកដ៏ល្អបំផុតនៃសប្តាហ៍របស់ខ្ញុំ។',
        '3D Animation Student': 'សិស្សចលនា 3D',
        'Creative media student': 'សិស្សមេឌៀច្នៃប្រឌិត',
        'The graphic design course was hands-on from day one. I built a portfolio I could actually show to clients.': 'វគ្គរចនាក្រាហ្វិកមានការអនុវត្តផ្ទាល់ដៃតាំងពីថ្ងៃដំបូង។ ខ្ញុំបានកសាងផលប័ត្រការងារដែលខ្ញុំអាចបង្ហាញដល់អតិថិជនបានពិតប្រាកដ។',
        'Graphic Design Graduate': 'អ្នកបញ្ចប់ការសិក្សារចនាក្រាហ្វិក',
        'Now a junior designer': 'ឥឡូវជាអ្នករចនាថ្នាក់ដំបូង',
        'prev': 'មុន',
        'next': 'បន្ទាប់',

        'Who We Are': 'យើងជានរណា',
        'We help students, professionals and career changers build practical skills in computer office, graphic design, video editing, 3D, animation and IT — taught hands-on, in a supportive environment and at a price that works.': 'យើងជួយសិស្ស អ្នកជំនាញ និងអ្នកផ្លាស់ប្តូរអាជីព កសាងជំនាញជាក់ស្តែង ក្នុងកុំព្យូទ័រការិយាល័យ រចនាក្រាហ្វិក កាត់តវីដេអូ 3D ចលនា និង IT — បង្រៀនដោយអនុវត្តផ្ទាល់ដៃ ក្នុងបរិយាកាសគាំទ្រ និងក្នុងតម្លៃសមរម្យ។',
        'Our Purpose': 'គោលបំណងរបស់យើង',
        'Our Mission & Vision': 'បេសកកម្ម និងចក្ខុវិស័យរបស់យើង',
        'Our Mission': 'បេសកកម្មរបស់យើង',
        'To empower a new generation of Cambodian professionals with high-quality, practical and affordable IT and digital media training that leads to real careers.': 'ផ្តល់អំណាចដល់ជំនាន់ថ្មីនៃអ្នកជំនាញកម្ពុជា តាមរយៈការបណ្តុះបណ្តាល IT និងមេឌៀឌីជីថល ដែលមានគុណភាពខ្ពស់ ជាក់ស្តែង និងតម្លៃសមរម្យ ដើម្បីនាំទៅរកអាជីពពិតប្រាកដ។',
        'Our Vision': 'ចក្ខុវិស័យរបស់យើង',
        'To be the premier training and certification hub in Cambodia, bridging the gap between local talent and global industry standards through our partnership with Pearson.': 'ក្លាយជាមជ្ឈមណ្ឌលបណ្តុះបណ្តាល និងវិញ្ញាបនបត្រឈានមុខគេនៅកម្ពុជា ដោយបំពេញគម្លាតរវាងទេពកោសល្យក្នុងស្រុក និងស្តង់ដារឧស្សាហកម្មសកល តាមរយៈភាពជាដៃគូជាមួយ Pearson។',
        'Why Choose Us': 'ហេតុអ្វីជ្រើសរើសយើង',
        'The I-Tech Media Advantage': 'អត្ថប្រយោជន៍របស់ I-Tech Media',
        'Industry-Relevant Training': 'ការបណ្តុះបណ្តាលពាក់ព័ន្ធនឹងឧស្សាហកម្ម',
        'Learn the tools and workflows employers use today, so your skills apply on the job from day one.': 'រៀនឧបករណ៍ និងលំហូរការងារដែលនិយោជកប្រើសព្វថ្ងៃ ដើម្បីឱ្យជំនាញរបស់អ្នកអនុវត្តបានភ្លាមៗពីថ្ងៃដំបូងនៃការងារ។',
        'Experienced & Supportive Instructors': 'គ្រូបង្គោលមានបទពិសោធន៍ និងគាំទ្រពេញទំហឹង',
        'Learn from instructors who work in the field and guide you step by step, in class and beyond.': 'រៀនពីគ្រូដែលកំពុងធ្វើការក្នុងវិស័យ និងណែនាំអ្នកមួយជំហានម្តងៗ ទាំងក្នុងថ្នាក់ និងក្រៅថ្នាក់។',
        'Hands-on Learning Environment': 'បរិយាកាសរៀនអនុវត្តផ្ទាល់ដៃ',
        'Every session is practice-led, so you build real projects instead of only listening to theory.': 'រាល់វគ្គផ្តោតលើការអនុវត្ត ដើម្បីឱ្យអ្នកកសាងគម្រោងពិត ជំនួសឱ្យការស្តាប់ទ្រឹស្តីតែប៉ុណ្ណោះ។',
        'Modern Computer Lab & Equipment': 'មន្ទីរកុំព្យូទ័រ និងឧបករណ៍ទំនើប',
        'Train in well-equipped labs with up-to-date hardware and industry-standard software.': 'ហ្វឹកហាត់ក្នុងមន្ទីរដែលមានឧបករណ៍គ្រប់គ្រាន់ ជាមួយហាដវែរថ្មីៗ និងកម្មវិធីតាមស្តង់ដារឧស្សាហកម្ម។',
        'Affordable & Flexible Programs': 'កម្មវិធីតម្លៃសមរម្យ និងបត់បែន',
        'Reasonable fees and morning, evening or weekend schedules that fit around work or study.': 'តម្លៃសមរម្យ និងកាលវិភាគព្រឹក ល្ងាច ឬចុងសប្តាហ៍ ដែលសមនឹងការងារ ឬការសិក្សារបស់អ្នក។',
        'Pathway to Career Opportunities': 'ផ្លូវទៅកាន់ឱកាសអាជីព',
        'Build a portfolio and earn recognized certifications that open doors to local and international employers.': 'កសាងផលប័ត្រការងារ និងទទួលបានវិញ្ញាបនបត្រដែលទទួលស្គាល់ ដើម្បីបើកទ្វារទៅកាន់និយោជកក្នុងស្រុក និងអន្តរជាតិ។',

        'What We Offer': 'អ្វីដែលយើងផ្តល់ជូន',

        'We Are Happy To Help': 'យើងរីករាយក្នុងការជួយអ្នក',
        'General Enquiry': 'ការសាកសួរទូទៅ',
        'HR & Recruitment': 'ធនធានមនុស្ស និងការជ្រើសរើសបុគ្គលិក',
        'Call Us': 'ទូរស័ព្ទមកយើង',
        'Your Name': 'ឈ្មោះរបស់អ្នក',
        'Subject': 'ប្រធានបទ',
        'Message': 'សារ',
        'Send Message': 'ផ្ញើសារ',
        'Leave a message here': 'សរសេរសារនៅទីនេះ',
        'Department': 'ផ្នែក',
        'Choose a department': 'ជ្រើសរើសផ្នែក',
        'Your message is sent directly to the right team.': 'សាររបស់អ្នកត្រូវបានផ្ញើដោយផ្ទាល់ទៅក្រុមការងារដែលពាក់ព័ន្ធ។',

        'News & Updates': 'ព័ត៌មាន និងបច្ចុប្បន្នភាព',
        'News': 'ព័ត៌មាន',
        'Events': 'កម្មវិធី',
        'Latest from I-Tech Media': 'ព័ត៌មានថ្មីៗពី I-Tech Media',
        'Course announcements, campus updates and student success stories.': 'ការជូនដំណឹងអំពីវគ្គសិក្សា ព័ត៌មានថ្មីៗក្នុងបរិវេណសាលា និងរឿងជោគជ័យរបស់សិស្ស។',
        'Announcement': 'ការជូនដំណឹង',
        'November 2026': 'វិច្ឆិកា 2026',
        'October 2026': 'តុលា 2026',
        'September 2026': 'កញ្ញា 2026',
        'New term enrollment is now open': 'ការចុះឈ្មោះឆមាសថ្មី បើកហើយឥឡូវនេះ',
        'Enroll in graphic design, video editing, 3D animation or IT certification programs. Morning, evening and weekend classes are available.': 'ចុះឈ្មោះក្នុងកម្មវិធីរចនាក្រាហ្វិក កាត់តវីដេអូ ចលនា 3D ឬវិញ្ញាបនបត្រ IT។ មានថ្នាក់ព្រឹក ល្ងាច និងចុងសប្តាហ៍។',
        'Enroll online': 'ចុះឈ្មោះតាមអនឡាញ',
        'View courses': 'មើលវគ្គសិក្សា',
        'Pearson certification preparation': 'ការរៀបចំសម្រាប់វិញ្ញាបនបត្រ Pearson',
        'Prepare for Microsoft and IT Specialist certification exams with guided training and practice.': 'រៀបចំខ្លួនសម្រាប់ការប្រឡងវិញ្ញាបនបត្រ Microsoft និង IT Specialist ជាមួយការបណ្តុះបណ្តាលណែនាំ និងការអនុវត្ត។',
        'Read more': 'អានបន្ថែម',
        'Hands-on creative labs': 'មន្ទីរច្នៃប្រឌិតអនុវត្តផ្ទាល់ដៃ',
        'Practice on real projects in our computer and media labs with experienced instructors.': 'អនុវត្តលើគម្រោងពិត ក្នុងមន្ទីរកុំព្យូទ័រ និងមេឌៀរបស់យើង ជាមួយគ្រូបង្គោលដែលមានបទពិសោធន៍។',
        'Career-focused training': 'ការបណ្តុះបណ្តាលផ្តោតលើអាជីព',
        'Stay connected': 'ភ្ជាប់ទំនាក់ទំនងជាមួយយើង',
        'Follow I-Tech Media for course schedules, enrollment updates and student stories.': 'តាមដាន I-Tech Media សម្រាប់កាលវិភាគវគ្គសិក្សា ការជូនដំណឹងអំពីការចុះឈ្មោះ និងរឿងរបស់សិស្ស។',
        'Facebook Page': 'ផេក Facebook',
        'YouTube Channel': 'ឆានែល YouTube',

        'Upcoming Events': 'កម្មវិធីនាពេលខាងមុខ',
        'Visit our campus, meet the instructors and find the right course for you.': 'មកទស្សនាបរិវេណសាលារបស់យើង ជួបគ្រូបង្គោល និងស្វែងរកវគ្គសិក្សាដែលសមនឹងអ្នក។',
        'Nov 2026': 'វិច្ឆិកា 2026',
        'Dec 2026': 'ធ្នូ 2026',
        'Jan 2027': 'មករា 2027',
        '9:00 AM - 11:30 AM': '9:00 ព្រឹក - 11:30 ព្រឹក',
        '5:30 PM - 7:00 PM': '5:30 ល្ងាច - 7:00 ល្ងាច',
        'I-Tech Media Campus': 'បរិវេណ I-Tech Media',
        'Open Day & Free Trial Class': 'ថ្ងៃបើកទ្វារ និងថ្នាក់សាកល្បងឥតគិតថ្លៃ',
        'Pearson IT Certification Info Session': 'សិក្ខាសាលាផ្តល់ព័ត៌មានវិញ្ញាបនបត្រ IT របស់ Pearson',
        'Creative Portfolio Workshop': 'សិក្ខាសាលាផលប័ត្រការងារច្នៃប្រឌិត',
        'Weekend Career Talk: Digital Skills at Work': 'ការពិភាក្សាអាជីពចុងសប្តាហ៍៖ ជំនាញឌីជីថលក្នុងការងារ',
        'Tour our facilities, meet the instructors and try a free class in graphic design or video editing.': 'ទស្សនាបរិក្ខាររបស់យើង ជួបគ្រូបង្គោល និងសាកល្បងថ្នាក់ឥតគិតថ្លៃផ្នែករចនាក្រាហ្វិក ឬកាត់តវីដេអូ។',
        'Learn about Microsoft and IT Specialist certification paths, exam preparation and study plans.': 'ស្វែងយល់ពីផ្លូវវិញ្ញាបនបត្រ Microsoft និង IT Specialist ការរៀបចំសម្រាប់ការប្រឡង និងផែនការសិក្សា។',
        'Build a portfolio with guidance from our design and video instructors.': 'កសាងផលប័ត្រការងារ ដោយមានការណែនាំពីគ្រូរចនា និងគ្រូវីដេអូរបស់យើង។',
        'Hear how digital media and IT skills are used in real workplaces, and what employers look for.': 'ស្តាប់ពីរបៀបដែលជំនាញមេឌៀឌីជីថល និង IT ត្រូវបានប្រើក្នុងកន្លែងការងារពិត និងអ្វីដែលនិយោជកស្វែងរក។',
        'Register': 'ចុះឈ្មោះ',
        'Reserve a seat': 'កក់កៅអី',
        'Visit Us': 'មកជួបយើង',
        'Monday - Friday: 8:00 AM - 7:30 PM · Saturday - Sunday: 8:30 AM - 11:30 AM': 'ចន្ទ - សុក្រ៖ 8:00 ព្រឹក - 7:30 ល្ងាច · សៅរ៍ - អាទិត្យ៖ 8:30 ព្រឹក - 11:30 ព្រឹក',
        'Get directions': 'មើលទិសដៅ',

        'Student Admission Form': 'ទម្រង់ចុះឈ្មោះសិស្ស',
        'Complete the official admission form to apply. Our team will contact you after submission.': 'បំពេញទម្រង់ចុះឈ្មោះផ្លូវការដើម្បីដាក់ពាក្យ។ ក្រុមការងារយើងនឹងទាក់ទងអ្នកបន្ទាប់ពីដាក់ស្នើ។',
        "What you'll need": 'អ្វីដែលអ្នកត្រូវការ',
        'Name in English and Khmer': 'ឈ្មោះជាភាសាអង់គ្លេស និងខ្មែរ',
        'Date of birth, nationality and address': 'ថ្ងៃខែឆ្នាំកំណើត សញ្ជាតិ និងអាសយដ្ឋាន',
        'Phone number and emergency contact': 'លេខទូរស័ព្ទ និងអ្នកទំនាក់ទំនងបន្ទាន់',
        'School or university details': 'ព័ត៌មានសាលា ឬសាកលវិទ្យាល័យ',
        'Admission Form': 'ទម្រង់ចុះឈ្មោះ',
        'Open in new tab': 'បើកក្នុងផ្ទាំងថ្មី',
        'The admission form is provided in English.': 'ទម្រង់ចុះឈ្មោះផ្តល់ជូនជាភាសាអង់គ្លេស។',
        'I-Tech Media admission form': 'ទម្រង់ចុះឈ្មោះ I-Tech Media',

        'Gallery': 'វិចិត្រសាល',
        'Our Gallery': 'វិចិត្រសាលរបស់យើង',
        'Life at I-Tech Media': 'ជីវិតនៅ I-Tech Media',
        'Moments from our classes, certificate presentations and campus life.': 'ពេលវេលានៃថ្នាក់រៀន ពិធីប្រគល់វិញ្ញាបនបត្រ និងជីវិតក្នុងបរិវេណសាលារបស់យើង។',
        'All': 'ទាំងអស់',
        'Graduation': 'បញ្ចប់ការសិក្សា',
        'Class Activities': 'សកម្មភាពថ្នាក់រៀន',
        'Our Campus': 'បរិវេណសាលារបស់យើង',
        'Certificate presentation ceremony': 'ពិធីប្រគល់វិញ្ញាបនបត្រ',
        'Digital skills certificate award': 'ការផ្តល់វិញ្ញាបនបត្រជំនាញឌីជីថល',
        'Graduates celebrate their achievement': 'អ្នកបញ្ចប់ការសិក្សាអបអរសមិទ្ធផលរបស់ពួកគេ',
        'Certificate handover at I-Tech Media': 'ការប្រគល់វិញ្ញាបនបត្រនៅ I-Tech Media',
        'Workforce skills certificate': 'វិញ្ញាបនបត្រជំនាញការងារ',
        'Team certificate presentation': 'ការប្រគល់វិញ្ញាបនបត្រដល់ក្រុម',
        'Graduation day group photo': 'រូបថតក្រុមថ្ងៃបញ្ចប់ការសិក្សា',
        'Computer lab practice': 'ការអនុវត្តក្នុងមន្ទីរកុំព្យូទ័រ',
        'Guided practice session': 'វគ្គអនុវត្តដោយមានការណែនាំ',
        'Students at their workstations': 'សិស្សនៅស្ថានីយការងាររបស់ពួកគេ',
        'Hands-on computer class': 'ថ្នាក់កុំព្យូទ័រអនុវត្តផ្ទាល់ដៃ',
        'Learning together in the lab': 'រៀនជាមួយគ្នាក្នុងមន្ទីរ',
        'Evening computer class': 'ថ្នាក់កុំព្យូទ័រវេនល្ងាច',
        'Practical lab session': 'វគ្គអនុវត្តក្នុងមន្ទីរ',
        'Classroom practice': 'ការអនុវត្តក្នុងថ្នាក់រៀន',
        'Study session in the lab': 'វគ្គសិក្សាក្នុងមន្ទីរ',
        'I-Tech Media campus entrance': 'ច្រកចូលបរិវេណ I-Tech Media',
        'Campus lounge and study area': 'កន្លែងនិយាយលេង និងសិក្សាក្នុងបរិវេណ',
        'Main computer lab': 'មន្ទីរកុំព្យូទ័រចម្បង',
        'Want to join the next class?': 'ចង់ចូលរួមថ្នាក់បន្ទាប់ឬ?',
        "Visit our campus or enroll online — we'd love to meet you.": 'មកទស្សនាបរិវេណសាលារបស់យើង ឬចុះឈ្មោះតាមអនឡាញ — យើងរីករាយជួបអ្នក។',

        'Students in an I-Tech Media computer lab': 'សិស្សនៅក្នុងមន្ទីរកុំព្យូទ័ររបស់ I-Tech Media',
        'Graphic design training at I-Tech Media': 'ការបណ្តុះបណ្តាលរចនាក្រាហ្វិកនៅ I-Tech Media',
        'Video editing workstation at I-Tech Media': 'កន្លែងកាត់តវីដេអូនៅ I-Tech Media',
        '3D animation class at I-Tech Media': 'ថ្នាក់ចលនា 3D នៅ I-Tech Media',
        'Pearson certification preparation at I-Tech Media': 'ការរៀបចំសម្រាប់វិញ្ញាបនបត្រ Pearson នៅ I-Tech Media',
        'Hands-on creative media lab at I-Tech Media': 'មន្ទីរមេឌៀច្នៃប្រឌិតអនុវត្តផ្ទាល់ដៃ នៅ I-Tech Media',
        'Career-focused training at I-Tech Media': 'ការបណ្តុះបណ្តាលផ្តោតលើអាជីព នៅ I-Tech Media'
    };

    var pages = {
        'index.html': {
            title: 'I-Tech Media Center | Digital & IT Skills Training in Phnom Penh',
            titleKm: 'I-Tech Media Center | ការបណ្តុះបណ្តាលជំនាញឌីជីថល និង IT នៅភ្នំពេញ',
            description: 'I-Tech Media Center offers hands-on IT, graphic design, video editing, 3D, animation and Pearson certification training in Phnom Penh.',
            descriptionKm: 'I-Tech Media Center ផ្តល់ការបណ្តុះបណ្តាល IT រចនាក្រាហ្វិក កាត់តវីដេអូ 3D ចលនា និងវិញ្ញាបនបត្រ Pearson ដោយអនុវត្តផ្ទាល់ដៃ នៅភ្នំពេញ។'
        },
        'about.html': {
            title: 'About Us | I-Tech Media Center',
            titleKm: 'អំពីយើង | I-Tech Media Center',
            description: 'Learn about I-Tech Media, a digital and IT training center in Phnom Penh empowering Cambodian professionals with practical, affordable education.',
            descriptionKm: 'ស្វែងយល់អំពី I-Tech Media មជ្ឈមណ្ឌលបណ្តុះបណ្តាលឌីជីថល និង IT នៅភ្នំពេញ ដែលផ្តល់ការអប់រំជាក់ស្តែង និងតម្លៃសមរម្យដល់អ្នកជំនាញកម្ពុជា។'
        },
        'service.html': {
            title: 'Services | I-Tech Media Center',
            titleKm: 'សេវាកម្ម | I-Tech Media Center',
            description: 'Explore I-Tech Media services: expert-led training, Pearson certification, creative media labs, flexible schedules and career support.',
            descriptionKm: 'ស្វែងយល់សេវាកម្មរបស់ I-Tech Media៖ ការបណ្តុះបណ្តាលដោយអ្នកជំនាញ វិញ្ញាបនបត្រ Pearson មន្ទីរមេឌៀច្នៃប្រឌិត កាលវិភាគបត់បែន និងការគាំទ្រអាជីព។'
        },
        'menu.html': {
            title: 'Courses | I-Tech Media Center',
            titleKm: 'វគ្គសិក្សា | I-Tech Media Center',
            description: 'Browse I-Tech Media courses in graphic design, video editing, photography, UX/UI, 3D animation, computer office and Pearson IT certifications.',
            descriptionKm: 'រកមើលវគ្គសិក្សារបស់ I-Tech Media ក្នុងរចនាក្រាហ្វិក កាត់តវីដេអូ ថតរូប UX/UI ចលនា 3D កុំព្យូទ័រការិយាល័យ និងវិញ្ញាបនបត្រ IT របស់ Pearson។'
        },
        'booking.html': {
            title: 'Enroll Online | I-Tech Media Center',
            titleKm: 'ចុះឈ្មោះតាមអនឡាញ | I-Tech Media Center',
            description: 'Complete the I-Tech Media student admission form online. Submit your details and our team will contact you about enrollment.',
            descriptionKm: 'បំពេញទម្រង់ចុះឈ្មោះសិស្ស I-Tech Media តាមអនឡាញ។ ដាក់ស្នើព័ត៌មានរបស់អ្នក ហើយក្រុមការងារយើងនឹងទាក់ទងអ្នកអំពីការចុះឈ្មោះ។'
        },
        'team.html': {
            title: 'Our Instructors | I-Tech Media Center',
            titleKm: 'គ្រូបង្គោលរបស់យើង | I-Tech Media Center',
            description: "Meet the instructors and trainers behind I-Tech Media's digital media and IT certification programs.",
            descriptionKm: 'ជួបគ្រូបង្គោល និងអ្នកបណ្តុះបណ្តាលនៅពីក្រោយកម្មវិធីមេឌៀឌីជីថល និងវិញ្ញាបនបត្រ IT របស់ I-Tech Media។'
        },
        'testimonial.html': {
            title: 'Student Testimonials | I-Tech Media Center',
            titleKm: 'មតិអ្នករៀន | I-Tech Media Center',
            description: 'Read what students say about learning graphic design, video editing, 3D animation and IT at I-Tech Media.',
            descriptionKm: 'អានអ្វីដែលសិស្សនិយាយអំពីការរៀនរចនាក្រាហ្វិក កាត់តវីដេអូ ចលនា 3D និង IT នៅ I-Tech Media។'
        },
        'contact.html': {
            title: 'Contact Us | I-Tech Media Center',
            titleKm: 'ទំនាក់ទំនងយើង | I-Tech Media Center',
            description: 'Contact I-Tech Media in Phnom Penh: address, phone, email, office hours and map.',
            descriptionKm: 'ទាក់ទង I-Tech Media នៅភ្នំពេញ៖ អាសយដ្ឋាន ទូរស័ព្ទ អ៊ីមែល ម៉ោងធ្វើការ និងផែនទី។'
        },
        'news.html': {
            title: 'News & Updates | I-Tech Media Center',
            titleKm: 'ព័ត៌មាន និងបច្ចុប្បន្នភាព | I-Tech Media Center',
            description: 'Read the latest news and updates from I-Tech Media: course announcements, campus news, certification preparation and student success stories.',
            descriptionKm: 'អានព័ត៌មាន និងបច្ចុប្បន្នភាពថ្មីៗពី I-Tech Media៖ ការជូនដំណឹងអំពីវគ្គសិក្សា ព័ត៌មានក្នុងបរិវេណសាលា ការរៀបចំសម្រាប់វិញ្ញាបនបត្រ និងរឿងជោគជ័យរបស់សិស្ស។'
        },
        'event.html': {
            title: 'Events | I-Tech Media Center',
            titleKm: 'កម្មវិធី | I-Tech Media Center',
            description: 'Join upcoming I-Tech Media events: open days, free trial classes, certification info sessions and creative workshops in Phnom Penh.',
            descriptionKm: 'ចូលរួមកម្មវិធីនាពេលខាងមុខរបស់ I-Tech Media៖ ថ្ងៃបើកទ្វារ ថ្នាក់សាកល្បងឥតគិតថ្លៃ សិក្ខាសាលាផ្តល់ព័ត៌មានវិញ្ញាបនបត្រ និងសិក្ខាសាលាច្នៃប្រឌិត នៅភ្នំពេញ។'
        },
        'gallery.html': {
            title: 'Gallery | I-Tech Media Center',
            titleKm: 'វិចិត្រសាល | I-Tech Media Center',
            description: 'See photos of I-Tech Media activities: certificate presentations, class activities, computer labs and our campus in Phnom Penh.',
            descriptionKm: 'មើលរូបថតសកម្មភាពរបស់ I-Tech Media៖ ពិធីប្រគល់វិញ្ញាបនបត្រ សកម្មភាពថ្នាក់រៀន មន្ទីរកុំព្យូទ័រ និងបរិវេណសាលានៅភ្នំពេញ។'
        }
    };

    var textOrig = new WeakMap();
    var attrOrig = new WeakMap();
    var metaEl = document.querySelector('meta[name="description"]');
    var originalTitle = document.title;
    var originalDescription = metaEl ? metaEl.getAttribute('content') : '';

    function currentFile() {
        var file = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
        return /\.html?$/.test(file) ? file : 'index.html';
    }

    function eachTextNode(fn) {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
        var nodes = [];
        var node;
        while ((node = walker.nextNode())) {
            nodes.push(node);
        }
        for (var i = 0; i < nodes.length; i++) {
            var parent = nodes[i].parentNode;
            if (!parent || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(parent.nodeName)) continue;
            fn(nodes[i]);
        }
    }

    function applyAttributes(toKm) {
        var els = document.querySelectorAll('[placeholder],[alt],[title]');
        var attrs = ['placeholder', 'alt', 'title'];
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (!attrOrig.has(el)) {
                attrOrig.set(el, {
                    placeholder: el.getAttribute('placeholder'),
                    alt: el.getAttribute('alt'),
                    title: el.getAttribute('title')
                });
            }
            var orig = attrOrig.get(el);
            for (var j = 0; j < attrs.length; j++) {
                var attr = attrs[j];
                var value = orig[attr];
                if (value == null) continue;
                var hasKm = Object.prototype.hasOwnProperty.call(km, value);
                el.setAttribute(attr, toKm && hasKm ? km[value] : value);
            }
        }
    }

    function applyKm() {
        eachTextNode(function (node) {
            var raw = node.nodeValue;
            var key = raw.trim().replace(/\s+/g, ' ');
            if (!key || !Object.prototype.hasOwnProperty.call(km, key)) return;
            if (!textOrig.has(node)) textOrig.set(node, raw);
            var lead = raw.match(/^\s*/)[0];
            var trail = raw.match(/\s*$/)[0];
            node.nodeValue = lead + km[key] + trail;
        });
        applyAttributes(true);
    }

    function applyEn() {
        eachTextNode(function (node) {
            if (textOrig.has(node)) node.nodeValue = textOrig.get(node);
        });
        applyAttributes(false);
    }

    function applyPageMeta(lang) {
        var page = pages[currentFile()];
        document.title = page ? (lang === 'km' ? page.titleKm : page.title) : originalTitle;
        if (metaEl) {
            metaEl.setAttribute('content', page ? (lang === 'km' ? page.descriptionKm : page.description) : originalDescription);
        }
    }

    function setLang(lang, save) {
        lang = lang === 'km' ? 'km' : 'en';
        document.documentElement.lang = lang;
        if (lang === 'km') {
            applyKm();
        } else {
            applyEn();
        }
        applyPageMeta(lang);
        document.querySelectorAll('[data-lang]').forEach(function (link) {
            link.classList.toggle('active-lang', link.getAttribute('data-lang') === lang);
        });
        document.querySelectorAll('.lang-label').forEach(function (label) {
            label.textContent = lang === 'km' ? 'ខ្មែរ' : 'EN';
        });
        if (save) {
            try {
                localStorage.setItem(STORAGE_KEY, lang);
            } catch (e) {}
        }
    }

    var saved = 'en';
    try {
        saved = localStorage.getItem(STORAGE_KEY) || 'en';
    } catch (e) {}
    setLang(saved, false);

    document.addEventListener('click', function (e) {
        var link = e.target.closest ? e.target.closest('[data-lang]') : null;
        if (!link) return;
        e.preventDefault();
        setLang(link.getAttribute('data-lang'), true);
        var dropdown = link.closest('.dropdown');
        if (dropdown) {
            var toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
            if (toggle && window.bootstrap && bootstrap.Dropdown) {
                var instance = bootstrap.Dropdown.getInstance(toggle);
                if (instance) instance.hide();
            }
        }
    });
})();
