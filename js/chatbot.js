(function () {
    'use strict';

    var UI = {
        en: {
            title: 'I-Tech Media Assistant',
            subtitle: 'Online • Instant answers',
            placeholder: 'Ask about courses, fees, schedule...',
            send: 'Send message',
            open: 'Open chat',
            close: 'Close chat',
            welcome: "Hi! I'm the I-Tech Media assistant. Ask me about any course — fees, duration or curriculum — and I'll answer for that course.",
            chips: ['Courses', 'Course fees', 'Enroll', 'Why choose us', 'Contact'],
            courseLinks: [['View course details', 'menu.html'], ['Enroll online', 'booking.html']],
            feeLinks: [['View all course fees', 'menu.html'], ['Enroll online', 'booking.html']]
        },
        km: {
            title: 'ជំនួយការ I-Tech Media',
            subtitle: 'អនឡាញ • ឆ្លើយតបភ្លាមៗ',
            placeholder: 'សួរអំពីវគ្គសិក្សា តម្លៃ ម៉ោងរៀន...',
            send: 'ផ្ញើសារ',
            open: 'បើកការសន្ទនា',
            close: 'បិទការសន្ទនា',
            welcome: 'សួស្តី! ខ្ញុំជាជំនួយការរបស់ I-Tech Media។ សួរអំពីវគ្គសិក្សាណាមួយ — តម្លៃ រយៈពេល ឬកម្មវិធីសិក្សា — ហើយខ្ញុំនឹងឆ្លើយសម្រាប់វគ្គនោះ។',
            chips: ['វគ្គសិក្សា', 'តម្លៃវគ្គសិក្សា', 'ចុះឈ្មោះ', 'ហេតុអ្វីជ្រើសរើសយើង', 'ទំនាក់ទំនង'],
            courseLinks: [['មើលវគ្គសិក្សា', 'menu.html'], ['ចុះឈ្មោះតាមអនឡាញ', 'booking.html']],
            feeLinks: [['មើលតម្លៃវគ្គសិក្សាទាំងអស់', 'menu.html'], ['ចុះឈ្មោះតាមអនឡាញ', 'booking.html']]
        }
    };

    var REPLIES = {
        en: {
            greeting: {
                text: "Hi! I'm the I-Tech Media assistant. Ask me about courses, enrollment, fees, schedules, location or contact details."
            },
            courses: {
                text: "Here's what you can study at I-Tech Media:\n• Local: Computer Office, Robotics, Graphic Design, Photography (Beginner & Professional), Cinematography\n• International (Pearson): Generative AI, CyberSecurity, Software Development\n\nName any course and I'll tell you its duration, class size, curriculum and fee.",
                links: [['Full course list', 'menu.html'], ['Enroll online', 'booking.html']]
            },
            enrollment: {
                text: "Enrolling starts with the online admission form:\n1. Open the Enroll Online page\n2. Complete the admission form (personal, contact and education details)\n3. Submit — our team will contact you\n\nYou can also call us if you need help choosing a course.",
                links: [['Enroll online', 'booking.html'], ['Contact us', 'contact.html']]
            },
            fees: {
                text: "Tuition is shown on each course card: local programs range from $40 to $320, and Pearson certification programs are $300. Photography for Professional also offers a $100 per-session option.",
                links: [['View course fees', 'menu.html'], ['Contact us', 'contact.html']]
            },
            schedule: {
                text: "Office hours:\n• Monday–Friday: 8:00 AM – 7:30 PM\n• Saturday–Sunday: 8:30 AM – 11:30 AM\n\nClasses are available in morning, evening and weekend sessions. Contact us for the timetable of your course.",
                links: [['Contact us', 'contact.html']]
            },
            location: {
                text: "We're at Building #108, St. 472, Sangkat Toul Tom Poung I, Khan Chamkarmorn, Phnom Penh.\n\nThe contact page includes the map and directions.",
                links: [['Contact & map', 'contact.html']]
            },
            contact: {
                text: "You can reach us at:\n• Phone: (+855) 096 582 8662 / 092 426 205\n• Email: itechmediabusiness@gmail.com\n• Facebook: I-Tech Media School\n\nOur team usually replies during office hours.",
                links: [['Contact page', 'contact.html'], ['Email us', 'mailto:itechmediabusiness@gmail.com'], ['Facebook', 'https://www.facebook.com/itechmediaschool']]
            },
            certification: {
                text: "I-Tech Media is a Pearson Silver Partner. Our international certification tracks are:\n• Generative AI (CCS-100)\n• IT Specialist CyberSecurity (INF-105)\n• IT Specialist Software Development (PC305)\n\nEach program is 60 hours and includes exam preparation.",
                links: [['Certification courses', 'menu.html']]
            },
            why: {
                text: "Here's why students choose I-Tech Media:\n• Industry-relevant training built around real market needs\n• Experienced and supportive instructors\n• Hands-on learning with real projects\n• Modern computer lab and up-to-date equipment\n• Affordable fees and flexible schedules\n• A pathway to careers in IT, media, design and creative industries",
                links: [['Why choose us', 'about.html'], ['View courses', 'menu.html']]
            },
            about: {
                text: "I-Tech Media is a media and digital skills training center in Phnom Penh. We offer hands-on local courses in computer office, robotics, graphic design, photography and cinematography, plus Pearson professional certifications in AI, cybersecurity and software development.",
                links: [['About us', 'about.html'], ['View courses', 'menu.html']]
            },
            details: {
                text: "Course length ranges from 10 to 60 hours, and classes have 10–15 students. Tell me a course name — for example Robotics or Graphic Design — and I'll give you its duration, class size, curriculum and fee.",
                links: [['View course details', 'menu.html']]
            },
            instructors: {
                text: 'Our instructors are experienced professionals in design, photography, cinematography, computer office and IT. Meet them on the Instructors page.',
                links: [['Meet our instructors', 'team.html']]
            },
            testimonials: {
                text: 'Our students study graphic design, photography, cinematography, computer office and IT. Read their feedback on the Testimonials page.',
                links: [['Student testimonials', 'testimonial.html']]
            },
            news: {
                text: 'Course announcements, campus updates and student success stories are on our News & Updates page. The latest post is about new term enrollment.',
                links: [['News & Updates', 'news.html'], ['Enroll online', 'booking.html']]
            },
            events: {
                text: 'Upcoming events include Open Day & Free Trial Class, Pearson IT Certification Info Session, Creative Portfolio Workshop and a Weekend Career Talk. See the Events page for dates and times.',
                links: [['Upcoming events', 'event.html'], ['Register', 'booking.html']]
            },
            gallery: {
                text: 'You can see photos from our certificate presentations, class activities and campus on the Gallery page. Use the tabs to browse by category.',
                links: [['Photo gallery', 'gallery.html']]
            },
            human: {
                text: "Sure — our team can help you directly:\n• Phone: (+855) 096 582 8662 / 092 426 205\n• Email: itechmediabusiness@gmail.com\n\nYou can also send a message from the contact page.",
                links: [['Contact us', 'contact.html'], ['Email us', 'mailto:itechmediabusiness@gmail.com']]
            },
            thanks: {
                text: "You're welcome! Anything else I can help you with?"
            },
            bye: {
                text: 'Goodbye! Feel free to come back anytime.'
            },
            fallback: {
                text: "I'm not sure about that yet. I can help with courses, fees, enrollment, schedules, location, why choose us and contact details. For anything else, please reach our team:",
                links: [['Contact us', 'contact.html'], ['Email us', 'mailto:itechmediabusiness@gmail.com']]
            }
        },
        km: {
            greeting: {
                text: 'សួស្តី! ខ្ញុំជាជំនួយការរបស់ I-Tech Media។ សួរខ្ញុំអំពីវគ្គសិក្សា ការចុះឈ្មោះ តម្លៃ ម៉ោងរៀន ទីតាំង ឬទំនាក់ទំនង។'
            },
            courses: {
                text: 'អ្វីដែលអ្នកអាចរៀននៅ I-Tech Media៖\n• ក្នុងស្រុក៖ កុំព្យូទ័រការិយាល័យ រ៉ូបូត រចនាក្រាហ្វិក ការថតរូប (ថ្នាក់ដំបូង និងអាជីព) និងការថតភាពយន្ត\n• អន្តរជាតិ (Pearson)៖ បញ្ញាសិប្បនិម្មិតបង្កើត សន្តិសុខសាយប័រ និងការអភិវឌ្ឍន៍កម្មវិធី\n\nសរសេរឈ្មោះវគ្គសិក្សាណាមួយ ហើយខ្ញុំនឹងប្រាប់អំពីរយៈពេល ចំនួនសិស្ស កម្មវិធីសិក្សា និងតម្លៃ។',
                links: [['វគ្គសិក្សាទាំងអស់', 'menu.html'], ['ចុះឈ្មោះតាមអនឡាញ', 'booking.html']]
            },
            enrollment: {
                text: 'ការចុះឈ្មោះចាប់ផ្តើមពីទម្រង់ចុះឈ្មោះតាមអនឡាញ៖\n1. បើកទំព័រចុះឈ្មោះតាមអនឡាញ\n2. បំពេញទម្រង់ចុះឈ្មោះ (ព័ត៌មានផ្ទាល់ខ្លួន ទំនាក់ទំនង និងការសិក្សា)\n3. ដាក់ស្នើ — ក្រុមការងារយើងនឹងទាក់ទងអ្នក\n\nអ្នកក៏អាចទូរស័ព្ទមកកាន់ពួកយើង ប្រសិនបើត្រូវការការណែនាំជ្រើសរើសវគ្គសិក្សា។',
                links: [['ចុះឈ្មោះតាមអនឡាញ', 'booking.html'], ['ទំនាក់ទំនងមកកាន់ពួកយើង', 'contact.html']]
            },
            fees: {
                text: 'តម្លៃសិក្សាត្រូវបានបង្ហាញនៅលើកាតវគ្គសិក្សានីមួយៗ៖ កម្មវិធីក្នុងស្រុកមានចាប់ពី $40 ដល់ $320 ហើយកម្មវិធីវិញ្ញាបនបត្រ Pearson គឺ $300។ ការថតរូបអាជីពក៏មានជម្រើសបង់ $100 ក្នុងមួយវគ្គផងដែរ។',
                links: [['មើលតម្លៃវគ្គសិក្សា', 'menu.html'], ['ទំនាក់ទំនងមកកាន់ពួកយើង', 'contact.html']]
            },
            schedule: {
                text: 'ម៉ោងធ្វើការ៖\n• ចន្ទ - សុក្រ៖ 8:00 ព្រឹក – 7:30 ល្ងាច\n• សៅរ៍ - អាទិត្យ៖ 8:30 ព្រឹក – 11:30 ព្រឹក\n\nថ្នាក់រៀនមានវេនព្រឹក ល្ងាច និងចុងសប្តាហ៍។ សូមទាក់ទងយើងសម្រាប់កាលវិភាគវគ្គសិក្សារបស់អ្នក។',
                links: [['ទំនាក់ទំនងមកកាន់ពួកយើង', 'contact.html']]
            },
            location: {
                text: 'អាសយដ្ឋាន៖ Building #108, St. 472, Sangkat Toul Tom Poung I, Khan Chamkarmorn, Phnom Penh។\n\nទំព័រទំនាក់ទំនងមានផែនទី និងការណែនាំផ្លូវ។',
                links: [['ផែនទី និងទំនាក់ទំនង', 'contact.html']]
            },
            contact: {
                text: 'អ្នកអាចទាក់ទងយើងតាម៖\n• ទូរស័ព្ទ៖ (+855) 096 582 8662 / 092 426 205\n• អ៊ីមែល៖ itechmediabusiness@gmail.com\n• ហ្វេសប៊ុក៖ I-Tech Media School\n\nក្រុមការងារយើងឆ្លើយតបក្នុងម៉ោងធ្វើការ។',
                links: [['ទំព័រទំនាក់ទំនង', 'contact.html'], ['ផ្ញើអ៊ីមែល', 'mailto:itechmediabusiness@gmail.com'], ['ហ្វេសប៊ុក', 'https://www.facebook.com/itechmediaschool']]
            },
            certification: {
                text: 'I-Tech Media គឺជាដៃគូ Silver របស់ Pearson។ កម្មវិធីវិញ្ញាបនបត្រអន្តរជាតិរបស់យើងរួមមាន៖\n• Generative AI (CCS-100)\n• IT Specialist CyberSecurity (INF-105)\n• IT Specialist Software Development (PC305)\n\nកម្មវិធីនីមួយៗមានរយៈពេល 60 ម៉ោង និងរួមបញ្ចូលការរៀបចំសម្រាប់ការប្រឡង។',
                links: [['វគ្គសិក្សាវិញ្ញាបនបត្រ', 'menu.html']]
            },
            why: {
                text: 'ហេតុអ្វីសិស្សជ្រើសរើស I-Tech Media៖\n• ការបណ្តុះបណ្តាលពាក់ព័ន្ធនឹងឧស្សាហកម្ម ផ្អែកលើតម្រូវការទីផ្សារពិត\n• គ្រូបង្គោលមានបទពិសោធន៍ និងគាំទ្រពេញទំហឹង\n• ការរៀនអនុវត្តផ្ទាល់ដៃជាមួយគម្រោងពិត\n• មន្ទីរកុំព្យូទ័រ និងឧបករណ៍ទំនើប\n• ថ្លៃសិក្សាសមរម្យ និងកាលវិភាគបត់បែន\n• ផ្លូវទៅកាន់ឱកាសអាជីពក្នុងវិស័យ IT មេឌៀ រចនា និងច្នៃប្រឌិត',
                links: [['ហេតុអ្វីជ្រើសរើសយើង', 'about.html'], ['មើលវគ្គសិក្សា', 'menu.html']]
            },
            about: {
                text: 'I-Tech Media គឺជាមជ្ឈមណ្ឌលបណ្តុះបណ្តាលជំនាញមេឌៀ និងឌីជីថលនៅភ្នំពេញ។ យើងផ្តល់វគ្គសិក្សាក្នុងស្រុកអនុវត្តផ្ទាល់ដៃ ក្នុងកុំព្យូទ័រការិយាល័យ រ៉ូបូត រចនាក្រាហ្វិក ការថតរូប និងការថតភាពយន្ត ព្រមទាំងវិញ្ញាបនបត្រអាជីព Pearson ផ្នែក AI សន្តិសុខសាយប័រ និងការអភិវឌ្ឍន៍កម្មវិធី។',
                links: [['អំពីយើង', 'about.html'], ['មើលវគ្គសិក្សា', 'menu.html']]
            },
            details: {
                text: 'រយៈពេលវគ្គសិក្សាមានពី 10 ដល់ 60 ម៉ោង ហើយថ្នាក់នីមួយៗមានសិស្ស 10–15 នាក់។ សរសេរឈ្មោះវគ្គសិក្សា — ឧទាហរណ៍ រ៉ូបូត ឬ រចនាក្រាហ្វិក — ហើយខ្ញុំនឹងប្រាប់រយៈពេល ចំនួនសិស្ស កម្មវិធីសិក្សា និងតម្លៃ។',
                links: [['មើលវគ្គសិក្សា', 'menu.html']]
            },
            instructors: {
                text: 'គ្រូបង្គោលរបស់យើងជាអ្នកជំនាញដែលមានបទពិសោធន៍ក្នុងរចនា ការថតរូប ការថតភាពយន្ត កុំព្យូទ័រការិយាល័យ និង IT។ ជួបពួកគាត់នៅទំព័រគ្រូបង្គោល។',
                links: [['គ្រូបង្គោលរបស់យើង', 'team.html']]
            },
            testimonials: {
                text: 'សិស្សរបស់យើងរៀនរចនាក្រាហ្វិក ការថតរូប ការថតភាពយន្ត កុំព្យូទ័រការិយាល័យ និង IT។ អានមតិរបស់ពួកគេនៅទំព័រមតិអ្នករៀន។',
                links: [['មតិអ្នករៀន', 'testimonial.html']]
            },
            news: {
                text: 'ការជូនដំណឹងអំពីវគ្គសិក្សា ព័ត៌មានថ្មីៗក្នុងសាលា និងរឿងជោគជ័យរបស់សិស្ស មាននៅទំព័រព័ត៌មាន និងបច្ចុប្បន្នភាព។ ព័ត៌មានចុងក្រោយគឺអំពីការចុះឈ្មោះឆមាសថ្មី។',
                links: [['ព័ត៌មាន និងបច្ចុប្បន្នភាព', 'news.html'], ['ចុះឈ្មោះតាមអនឡាញ', 'booking.html']]
            },
            events: {
                text: 'កម្មវិធីនាពេលខាងមុខរួមមាន ថ្ងៃបើកទ្វារ និងថ្នាក់សាកល្បងឥតគិតថ្លៃ សិក្ខាសាលាផ្តល់ព័ត៌មានវិញ្ញាបនបត្រ IT របស់ Pearson សិក្ខាសាលាផលប័ត្រការងារច្នៃប្រឌិត និងការពិភាក្សាអាជីពចុងសប្តាហ៍។ សូមមើលទំព័រកម្មវិធីសម្រាប់កាលបរិច្ឆេទ និងម៉ោង។',
                links: [['កម្មវិធីនាពេលខាងមុខ', 'event.html'], ['ចុះឈ្មោះ', 'booking.html']]
            },
            gallery: {
                text: 'អ្នកអាចមើលរូបថតពិធីប្រគល់វិញ្ញាបនបត្រ សកម្មភាពថ្នាក់រៀន និងបរិវេណសាលានៅទំព័រវិចិត្រសាល។ ប្រើផ្ទាំងខាងលើដើម្បីជ្រើសមើលតាមប្រភេទ។',
                links: [['វិចិត្រសាលរូបថត', 'gallery.html']]
            },
            human: {
                text: 'បាទ/ចាស — ក្រុមការងារយើងអាចជួយអ្នកដោយផ្ទាល់៖\n• ទូរស័ព្ទ៖ (+855) 096 582 8662 / 092 426 205\n• អ៊ីមែល៖ itechmediabusiness@gmail.com\n\nអ្នកក៏អាចផ្ញើសារតាមទំព័រទំនាក់ទំនង។',
                links: [['ទំនាក់ទំនងមកកាន់ពួកយើង', 'contact.html'], ['ផ្ញើអ៊ីមែល', 'mailto:itechmediabusiness@gmail.com']]
            },
            thanks: {
                text: 'មិនអីទេ! តើមានអ្វីទៀតដែលខ្ញុំអាចជួយបាន?'
            },
            bye: {
                text: 'លាហើយ! សូមត្រឡប់មកវិញពេលណាក៏បាន។'
            },
            fallback: {
                text: 'សូមអភ័យទោស ខ្ញុំមិនទាន់យល់សំណួរនេះទេ។ ខ្ញុំអាចជួយអំពីវគ្គសិក្សា តម្លៃ ការចុះឈ្មោះ ម៉ោងរៀន ទីតាំង ហេតុអ្វីជ្រើសរើសយើង និងទំនាក់ទំនង។ សម្រាប់រឿងផ្សេង សូមទាក់ទងក្រុមការងារយើង៖',
                links: [['ទំនាក់ទំនងមកកាន់ពួកយើង', 'contact.html'], ['ផ្ញើអ៊ីមែល', 'mailto:itechmediabusiness@gmail.com']]
            }
        }
    };

    var COURSES = [
        {
            id: 'office',
            kw: ['computer office', 'office course', 'microsoft office', 'google gsuite', 'excel', 'powerpoint', 'word', 'office', 'co', 'កុំព្យូទ័រការិយាល័យ', 'អូហ្វីស', 'កុំព្យូទ័រ'],
            en: {
                answer: "Computer Office Course (CO) — Computer Skills\n• Curriculum: Microsoft Office + Google GSuite\n• Duration: 60 hours\n• Class size: 15 students\n• Tuition: $45.00\n\nYou'll build everyday office skills in Word, Excel, PowerPoint, Google Workspace and professional email — ready for real workplace tasks.",
                fee: 'Computer Office Course costs $45.00 for the full 60-hour program, with 15 students per class.'
            },
            km: {
                answer: 'វគ្គសិក្សាកុំព្យូទ័រការិយាល័យ (CO) — ជំនាញកុំព្យូទ័រ\n• កម្មវិធីសិក្សា៖ Microsoft Office + Google GSuite\n• រយៈពេល៖ 60 ម៉ោង\n• ចំនួនសិស្ស៖ 15 នាក់\n• តម្លៃ៖ $45.00\n\nអ្នកនឹងកសាងជំនាញការិយាល័យប្រចាំថ្ងៃក្នុង Word, Excel, PowerPoint, Google Workspace និងអ៊ីមែលវិជ្ជាជីវៈ — ត្រៀមសម្រាប់ការងារពិតប្រាកដ។',
                fee: 'វគ្គសិក្សាកុំព្យូទ័រការិយាល័យមានតម្លៃ $45.00 សម្រាប់កម្មវិធីពេញ 60 ម៉ោង ដោយមានសិស្ស 15 នាក់ក្នុងមួយថ្នាក់។'
            }
        },
        {
            id: 'robotics',
            kw: ['robotics', 'robotics course', 'robot', 'microbit', 'microbits', 'arduino', 'rb', 'រ៉ូបូត'],
            en: {
                answer: "Robotics Course (RB) — Technical Skills\n• Curriculum: Microbits, Arduino and more\n• Duration: 12 weeks (24 hours)\n• Class size: 10 students\n• Tuition: $320.00\n\nYou'll learn electronics and robotics fundamentals, build and program Microbit and Arduino projects, and solve real hardware challenges.",
                fee: 'Robotics Course costs $320.00 for the full 12-week program (24 hours), with 10 students per class.'
            },
            km: {
                answer: 'វគ្គសិក្សារ៉ូបូត (RB) — ជំនាញបច្ចេកទេស\n• កម្មវិធីសិក្សា៖ Microbit, Arduino និងច្រើនទៀត\n• រយៈពេល៖ 12 សប្តាហ៍ (24 ម៉ោង)\n• ចំនួនសិស្ស៖ 10 នាក់\n• តម្លៃ៖ $320.00\n\nអ្នកនឹងរៀនមូលដ្ឋានអេឡិចត្រូនិក និងរ៉ូបូត កសាង និងសរសេរកូដគម្រោង Microbit និង Arduino ព្រមទាំងដោះស្រាយបញ្ហាហាដវែរពិតប្រាកដ។',
                fee: 'វគ្គសិក្សារ៉ូបូតមានតម្លៃ $320.00 សម្រាប់កម្មវិធីពេញ 12 សប្តាហ៍ (24 ម៉ោង) ដោយមានសិស្ស 10 នាក់ក្នុងមួយថ្នាក់។'
            }
        },
        {
            id: 'graphic',
            kw: ['graphic design', 'graphic', 'photoshop', 'illustrator', 'indesign', 'design', 'gd', 'រចនាក្រាហ្វិក', 'រចនា'],
            en: {
                answer: "Graphic Design (GD) — Digital Media\n• Curriculum: Photoshop & Illustrator + InDesign\n• Duration: 60 hours\n• Class size: 10 students\n• Tuition: $160.00\n\nBuild logo, branding and social media designs, edit photos, create vector illustrations and finish print-ready portfolio projects.",
                fee: 'Graphic Design costs $160.00 for the full 60-hour program, with 10 students per class.'
            },
            km: {
                answer: 'រចនាក្រាហ្វិក (GD) — មេឌៀឌីជីថល\n• កម្មវិធីសិក្សា៖ Photoshop និង Illustrator + InDesign\n• រយៈពេល៖ 60 ម៉ោង\n• ចំនួនសិស្ស៖ 10 នាក់\n• តម្លៃ៖ $160.00\n\nអ្នកនឹងបង្កើតឡូហ្គោ អត្តសញ្ញាណម៉ាក និងការរចនាបណ្តាញសង្គម កាត់តរូបថត គូររូបវ៉ិចទ័រ និងបញ្ចប់គម្រោងផលប័ត្រដែលអាចបោះពុម្ពបាន។',
                fee: 'រចនាក្រាហ្វិកមានតម្លៃ $160.00 សម្រាប់កម្មវិធីពេញ 60 ម៉ោង ដោយមានសិស្ស 10 នាក់ក្នុងមួយថ្នាក់។'
            }
        },
        {
            id: 'photopro',
            kw: ['photography for professional', 'professional photography', 'pgpro', 'studio photography', 'lightroom', 'ការថតរូបអាជីព'],
            en: {
                answer: "Photography for Professional (PGpro) — Digital Media\n• Curriculum: Lightroom + studio & outdoor practice\n• Duration: 25 hours\n• Class size: 10 students\n• Tuition: $200.00 (or $100.00 per session)\n\nMaster manual camera control, studio and natural lighting, portraits, product photography and professional retouching in Lightroom.",
                fee: 'Photography for Professional costs $200.00 for the full 25-hour program, or $100.00 per session. Class size is 10 students.'
            },
            km: {
                answer: 'ការថតរូបអាជីព (PGpro) — មេឌៀឌីជីថល\n• កម្មវិធីសិក្សា៖ Lightroom + ការអនុវត្តក្នុងស្ទូឌីយោ និងខាងក្រៅ\n• រយៈពេល៖ 25 ម៉ោង\n• ចំនួនសិស្ស៖ 10 នាក់\n• តម្លៃ៖ $200.00 (ឬ $100.00 ក្នុងមួយវគ្គ)\n\nអ្នកនឹងធ្វើជាម្ចាស់ការគ្រប់គ្រងកាមេរ៉ាដោយដៃ ពន្លឺស្ទូឌីយោ និងធម្មជាតិ រូបថតមុខ រូបថតផលិតផល និងការកែរូបថតវិជ្ជាជីវៈក្នុង Lightroom។',
                fee: 'ការថតរូបអាជីពមានតម្លៃ $200.00 សម្រាប់កម្មវិធីពេញ 25 ម៉ោង ឬ $100.00 ក្នុងមួយវគ្គ។ ថ្នាក់មានសិស្ស 10 នាក់។'
            }
        },
        {
            id: 'photobeg',
            kw: ['photography for beginner', 'beginner photography', 'pgbeg', 'basic photography', 'photography class', 'ការថតរូបថ្នាក់ដំបូង', 'ថតរូបថ្នាក់ដំបូង'],
            en: {
                answer: "Photography for Beginner (PGbeg) — Digital Media\n• Curriculum: Lightroom + camera basics\n• Duration: 2 weeks (10 hours)\n• Class size: Small group\n• Tuition: $40.00\n\nLearn your camera and manual mode, composition and natural-light techniques, then finish quick photo edits in Lightroom.",
                fee: 'Photography for Beginner costs $40.00 for the 2-week program (10 hours). Classes are kept small.'
            },
            km: {
                answer: 'ការថតរូបថ្នាក់ដំបូង (PGbeg) — មេឌៀឌីជីថល\n• កម្មវិធីសិក្សា៖ Lightroom + មូលដ្ឋានកាមេរ៉ា\n• រយៈពេល៖ 2 សប្តាហ៍ (10 ម៉ោង)\n• ចំនួនសិស្ស៖ ក្រុមតូច\n• តម្លៃ៖ $40.00\n\nអ្នកនឹងយល់ពីកាមេរ៉ា និងរបៀបថតដោយដៃ បច្ចេកទេសរៀបចំរូប និងពន្លឺធម្មជាតិ បន្ទាប់មកកាត់តរូបថតរហ័សក្នុង Lightroom។',
                fee: 'ការថតរូបថ្នាក់ដំបូងមានតម្លៃ $40.00 សម្រាប់កម្មវិធី 2 សប្តាហ៍ (10 ម៉ោង)។ ថ្នាក់រក្សាទំហំតូច។'
            }
        },
        {
            id: 'cinematography',
            kw: ['cinematography', 'videography', 'film making', 'filmmaking', 'video production', 'filming', 'video editing', 'video', 'editing', 'vg', 'ការថតភាពយន្ត', 'ថតភាពយន្ត', 'ថតវីដេអូ'],
            en: {
                answer: "Cinematography (VG) — Digital Media\n• Curriculum: Filming, storytelling and video production\n• Duration: Flexible\n• Class size: 15 students\n• Tuition: $250.00\n\nLearn camera movement, framing and cinematic lighting, plan and direct a story, then shoot and edit content for brands and social media.",
                fee: 'Cinematography costs $250.00 with a flexible schedule. Contact us for the next start date.'
            },
            km: {
                answer: 'ការថតភាពយន្ត (VG) — មេឌៀឌីជីថល\n• កម្មវិធីសិក្សា៖ ការថត ការនិទានរឿង និងការផលិតវីដេអូ\n• រយៈពេល៖ បត់បែនតាមកាលវិភាគ\n• ចំនួនសិស្ស៖ 15 នាក់\n• តម្លៃ៖ $250.00\n\nអ្នកនឹងរៀនចលនាកាមេរ៉ា ការរៀបចំស៊ុម ពន្លឺបែបភាពយន្ត ការរៀបចំផែនការ និងដឹកនាំរឿង បន្ទាប់មកថត និងកាត់តខ្លឹមសារសម្រាប់ម៉ាក និងបណ្តាញសង្គម។',
                fee: 'ការថតភាពយន្តមានតម្លៃ $250.00 ជាមួយកាលវិភាគបត់បែន។ សូមទាក់ទងយើងសម្រាប់កាលបរិច្ឆេទចាប់ផ្តើមបន្ទាប់។'
            }
        },
        {
            id: 'genai',
            kw: ['generative ai', 'gen ai', 'ccs-100', 'ccs100', 'ai course', 'generative', 'បញ្ញាសិប្បនិម្មិត'],
            en: {
                answer: "Generative AI (CCS-100) — Pearson Professional Certification\n• Curriculum: Pearson Generative AI Fundamentals (CCS-100)\n• Duration: 60 hours\n• Class size: 15 students\n• Tuition: $300.00\n\nCover generative AI concepts, prompts and use cases, responsible AI at work, and preparation for the Pearson CCS-100 certification exam.",
                fee: 'Generative AI (CCS-100) costs $300.00 for the 60-hour Pearson certification program.'
            },
            km: {
                answer: 'បញ្ញាសិប្បនិម្មិតបង្កើត (CCS-100) — វិញ្ញាបនបត្រអាជីព Pearson\n• កម្មវិធីសិក្សា៖ Pearson Generative AI Fundamentals (CCS-100)\n• រយៈពេល៖ 60 ម៉ោង\n• ចំនួនសិស្ស៖ 15 នាក់\n• តម្លៃ៖ $300.00\n\nអ្នកនឹងរៀនគំនិត Generative AI ការសរសេរ prompt ករណីប្រើប្រាស់ ការប្រើ AI ដោយទំនួលខុសត្រូវក្នុងការងារ និងការរៀបចំសម្រាប់ការប្រឡង Pearson CCS-100។',
                fee: 'វគ្គ Generative AI (CCS-100) មានតម្លៃ $300.00 សម្រាប់កម្មវិធីវិញ្ញាបនបត្រ Pearson 60 ម៉ោង។'
            }
        },
        {
            id: 'cybersecurity',
            kw: ['cybersecurity', 'cyber security', 'inf-105', 'inf105', 'security course', 'សន្តិសុខសាយប័រ'],
            en: {
                answer: "IT Specialist CyberSecurity (INF-105) — Pearson Professional Certification\n• Curriculum: Pearson IT Specialist CyberSecurity (INF-105)\n• Duration: 60 hours\n• Class size: 15 students\n• Tuition: $300.00\n\nStudy threats, attacks and security best practices; secure devices, networks and data; and prepare for the Pearson INF-105 certification exam.",
                fee: 'IT Specialist CyberSecurity (INF-105) costs $300.00 for the 60-hour Pearson certification program.'
            },
            km: {
                answer: 'អ្នកជំនាញ IT សន្តិសុខសាយប័រ (INF-105) — វិញ្ញាបនបត្រអាជីព Pearson\n• កម្មវិធីសិក្សា៖ Pearson IT Specialist CyberSecurity (INF-105)\n• រយៈពេល៖ 60 ម៉ោង\n• ចំនួនសិស្ស៖ 15 នាក់\n• តម្លៃ៖ $300.00\n\nអ្នកនឹងសិក្សាការគំរាមកំហែង ការវាយប្រហារ និងការអនុវត្តល្អបំផុតផ្នែកសុវត្ថិភាព ការពារឧបករណ៍ បណ្តាញ និងទិន្នន័យ និងការរៀបចំសម្រាប់ការប្រឡង Pearson INF-105។',
                fee: 'អ្នកជំនាញ IT សន្តិសុខសាយប័រ (INF-105) មានតម្លៃ $300.00 សម្រាប់កម្មវិធីវិញ្ញាបនបត្រ Pearson 60 ម៉ោង។'
            }
        },
        {
            id: 'software',
            kw: ['software development', 'software', 'programming', 'coding', 'python', 'java', 'javascript', 'html', 'css', 'pc305', 'inf-305', 'inf305', 'ការអភិវឌ្ឍន៍កម្មវិធី', 'សរសេរកម្មវិធី', 'កូដ'],
            en: {
                answer: "Software Development (PC305) — Pearson Professional Certification\n• Curriculum: Pearson IT Specialist Software Development (INF-305)\n• Duration: 60 hours\n• Class size: 15 students\n• Tuition: $300.00\n\nLearn programming logic, data and algorithms, build and debug real software projects, and prepare for the Pearson PC305 certification exam.",
                fee: 'Software Development (PC305) costs $300.00 for the 60-hour Pearson certification program.'
            },
            km: {
                answer: 'ការអភិវឌ្ឍន៍កម្មវិធី (PC305) — វិញ្ញាបនបត្រអាជីព Pearson\n• កម្មវិធីសិក្សា៖ Pearson IT Specialist Software Development (INF-305)\n• រយៈពេល៖ 60 ម៉ោង\n• ចំនួនសិស្ស៖ 15 នាក់\n• តម្លៃ៖ $300.00\n\nអ្នកនឹងរៀនតក្កវិជ្ជាសរសេរកម្មវិធី ទិន្នន័យ និងក្បួនដោះស្រាយ កសាង និងដោះស្រាយកំហុសគម្រោងកម្មវិធីពិតប្រាកដ និងការរៀបចំសម្រាប់ការប្រឡង Pearson PC305។',
                fee: 'ការអភិវឌ្ឍន៍កម្មវិធី (PC305) មានតម្លៃ $300.00 សម្រាប់កម្មវិធីវិញ្ញាបនបត្រ Pearson 60 ម៉ោង។'
            }
        }
    ];

    var INTENTS = [
        { id: 'fees', kw: ['fee', 'fees', 'price', 'prices', 'cost', 'costs', 'tuition', 'how much', 'payment', 'installment', 'discount', 'promotion', 'តម្លៃ', 'ថ្លៃ', 'បង់ប្រាក់', 'ចំណាយ', 'បញ្ចុះតម្លៃ'] },
        { id: 'schedule', kw: ['schedule', 'class time', 'class times', 'opening hours', 'are you open', 'open now', 'hours', 'morning', 'evening', 'weekend', 'ម៉ោង', 'កាលវិភាគ', 'ព្រឹក', 'ល្ងាច', 'ចុងសប្តាហ៍', 'បើក'] },
        { id: 'enrollment', kw: ['enroll', 'enrollment', 'register', 'registration', 'apply', 'application', 'admission', 'sign up', 'join', 'booking', 'ចុះឈ្មោះ', 'ដាក់ពាក្យ', 'ចាប់ផ្តើមរៀន'] },
        { id: 'certification', kw: ['pearson', 'certificate', 'certificates', 'certification', 'certified', 'it specialist', 'exam', 'ccs-100', 'ccs100', 'inf-105', 'inf105', 'pc305', 'វិញ្ញាបនបត្រ', 'សញ្ញាបត្រ', 'ប្រឡង'] },
        { id: 'location', kw: ['where', 'location', 'address', 'map', 'direction', 'directions', 'campus', 'located', 'ទីតាំង', 'អាសយដ្ឋាន', 'ផែនទី', 'នៅឯណា', 'នៅណា'] },
        { id: 'contact', kw: ['contact', 'phone', 'call', 'email', 'telegram', 'facebook', 'linkedin', 'youtube', 'message', 'ទំនាក់ទំនង', 'ទូរស័ព្ទ', 'អ៊ីមែល', 'ហ្វេសប៊ុក', 'តេឡេក្រាម'] },
        { id: 'human', kw: ['human', 'agent', 'real person', 'speak to someone', 'talk to someone', 'customer service', 'support', 'staff', 'មនុស្ស', 'បុគ្គលិក', 'ជួយផ្ទាល់'] },
        { id: 'instructors', kw: ['instructor', 'instructors', 'teacher', 'teachers', 'trainer', 'trainers', 'គ្រូ', 'គ្រូបង្គោល', 'បង្គោល'] },
        { id: 'testimonials', kw: ['testimonial', 'testimonials', 'review', 'reviews', 'feedback', 'student say', 'មតិ', 'មតិអ្នករៀន', 'ការវាយតម្លៃ'] },
        { id: 'events', kw: ['event', 'events', 'workshop', 'workshops', 'open day', 'info session', 'career talk', 'កម្មវិធី', 'សិក្ខាសាលា', 'ថ្ងៃបើកទ្វារ'] },
        { id: 'news', kw: ['news', 'update', 'updates', 'announcement', 'announcements', 'blog', 'ព័ត៌មាន', 'បច្ចុប្បន្នភាព', 'ជូនដំណឹង'] },
        { id: 'gallery', kw: ['gallery', 'photos', 'pictures', 'album', 'images', 'graduation photo', 'វិចិត្រសាល', 'រូបភាព', 'រូបថត'] },
        { id: 'details', kw: ['duration', 'how long', 'how many hours', 'weeks', 'curriculum', 'syllabus', 'outline', 'what will i learn', 'what do i learn', 'class size', 'students per class', 'how many students', 'course detail', 'course details', 'more detail', 'more details', 'រយៈពេល', 'កម្មវិធីសិក្សា', 'ចំនួនសិស្ស', 'លម្អិត'] },
        { id: 'why', kw: ['why choose', 'why should i', 'why study', 'why learn', 'advantage', 'advantages', 'benefit', 'benefits', 'why you', 'ហេតុអ្វីជ្រើសរើស', 'ហេតុអ្វីរៀន', 'អត្ថប្រយោជន៍'] },
        { id: 'courses', kw: ['course', 'courses', 'class', 'classes', 'program', 'programs', 'learn', 'study', 'training', 'photography', 'photo', 'videography', 'video', 'office', 'computer', 'robotics', 'robot', 'graphic', 'design', 'it course', 'it courses', 'វគ្គ', 'វគ្គសិក្សា', 'រៀន', 'សិក្សា', 'បណ្តុះបណ្តាល', 'រចនា', 'វីដេអូ', 'ថតរូប', 'កុំព្យូទ័រ', 'ជំនាញ', 'រ៉ូបូត'] },
        { id: 'about', kw: ['about', 'about you', 'about school', 'about the school', 'who are you', 'your school', 'mission', 'vision', 'history', 'អំពី', 'អំពីយើង', 'បេសកកម្ម', 'ចក្ខុវិស័យ'] },
        { id: 'greeting', kw: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'សួស្តី', 'ជំរាបសួរ', 'ហេឡូ'] },
        { id: 'thanks', kw: ['thank', 'thanks', 'thank you', 'អរគុណ'] },
        { id: 'bye', kw: ['bye', 'goodbye', 'see you', 'លាហើយ', 'ជួបគ្នា'] }
    ];

    var panels = null;

    function lang() {
        return document.documentElement.lang === 'km' ? 'km' : 'en';
    }

    function ui() {
        return UI[lang()];
    }

    function replyFor(id) {
        var set = REPLIES[lang()];
        return set[id] || set.fallback;
    }

    function escapeRegExp(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function hasKeyword(text, kw) {
        if (/[\u1780-\u17FF]/.test(kw)) {
            return text.indexOf(kw) !== -1;
        }
        var re = new RegExp('(^|[^a-z0-9])' + escapeRegExp(kw) + '([^a-z0-9]|$)', 'i');
        return re.test(text);
    }

    function normalize(text) {
        return ' ' + text.toLowerCase().replace(/\s+/g, ' ') + ' ';
    }

    function scoreKeywords(input, kws) {
        var score = 0;
        for (var i = 0; i < kws.length; i++) {
            if (hasKeyword(input, kws[i])) {
                score += kws[i].split(/\s+/).length;
            }
        }
        return score;
    }

    var ACTION_INTENTS = ['fees', 'schedule', 'enrollment', 'certification', 'location', 'contact', 'human', 'details', 'why'];

    function detect(input) {
        var bestId = null;
        var bestScore = 0;
        for (var i = 0; i < INTENTS.length; i++) {
            var intent = INTENTS[i];
            var score = scoreKeywords(input, intent.kw);
            if (score > 0 && ACTION_INTENTS.indexOf(intent.id) !== -1) {
                score += 2;
            }
            if (score > bestScore) {
                bestScore = score;
                bestId = intent.id;
            }
        }
        return bestId || 'fallback';
    }

    function matchCourse(input) {
        var best = null;
        var bestScore = 0;
        for (var i = 0; i < COURSES.length; i++) {
            var score = scoreKeywords(input, COURSES[i].kw);
            if (score > bestScore) {
                bestScore = score;
                best = COURSES[i];
            }
        }
        return best;
    }

    function courseAnswer(course) {
        return { text: course[lang()].answer, links: ui().courseLinks };
    }

    function courseFee(course) {
        return { text: course[lang()].fee, links: ui().feeLinks };
    }

    var lastCourse = null;

    var COURSE_INTENTS = ['courses', 'details', 'about', 'certification', 'fallback'];

    function respond(text) {
        var input = normalize(text);
        var intent = detect(input);
        var course = matchCourse(input);

        if (course) {
            if (COURSE_INTENTS.indexOf(intent) !== -1) {
                lastCourse = course;
                return courseAnswer(course);
            }
            if (intent === 'fees') {
                lastCourse = course;
                return courseFee(course);
            }
        }

        if (intent === 'fees' && lastCourse) {
            return courseFee(lastCourse);
        }

        if (intent === 'details' && lastCourse) {
            return courseAnswer(lastCourse);
        }

        return replyFor(intent);
    }

    function scrollToBottom() {
        panels.body.scrollTop = panels.body.scrollHeight;
    }

    function addMessage(kind, content) {
        var wrap = document.createElement('div');
        wrap.className = 'chat-msg ' + kind;

        var bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.textContent = content.text;
        wrap.appendChild(bubble);

        if (content.links && content.links.length) {
            var links = document.createElement('div');
            links.className = 'chat-links';
            content.links.forEach(function (item) {
                var a = document.createElement('a');
                a.href = item[1];
                a.textContent = item[0];
                if (/^https?:/i.test(item[1])) {
                    a.target = '_blank';
                    a.rel = 'noopener';
                }
                links.appendChild(a);
            });
            wrap.appendChild(links);
        }

        panels.body.appendChild(wrap);
        scrollToBottom();
    }

    function showTyping() {
        var wrap = document.createElement('div');
        wrap.className = 'chat-msg bot chat-typing';
        wrap.innerHTML = '<div class="chat-bubble"><span></span><span></span><span></span></div>';
        panels.body.appendChild(wrap);
        scrollToBottom();
        return wrap;
    }

    function send(text) {
        text = (text || '').trim();
        if (!text) return;
        addMessage('user', { text: text });
        panels.input.value = '';

        var typing = showTyping();
        window.setTimeout(function () {
            typing.remove();
            addMessage('bot', respond(text));
        }, 550 + Math.random() * 350);
    }

    function renderChips() {
        panels.chips.innerHTML = '';
        ui().chips.forEach(function (label) {
            var chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'chatbot-chip';
            chip.textContent = label;
            chip.addEventListener('click', function () {
                send(label);
            });
            panels.chips.appendChild(chip);
        });
    }

    function applyLanguage() {
        panels.title.textContent = ui().title;
        panels.status.textContent = ui().subtitle;
        panels.input.placeholder = ui().placeholder;
        panels.send.setAttribute('aria-label', ui().send);
        panels.close.setAttribute('aria-label', ui().close);
        panels.toggle.setAttribute('aria-label', ui().open);
        panels.panel.setAttribute('aria-label', ui().title);
        renderChips();
    }

    function openChat() {
        panels.panel.classList.add('open');
        panels.toggle.setAttribute('aria-expanded', 'true');
        if (!panels.greeted) {
            panels.greeted = true;
            addMessage('bot', { text: ui().welcome });
        }
        window.setTimeout(function () {
            panels.input.focus();
        }, 220);
    }

    function closeChat() {
        panels.panel.classList.remove('open');
        panels.toggle.setAttribute('aria-expanded', 'false');
    }

    function build() {
        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'chatbot-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="fa fa-comments"></i><span class="chatbot-dot"></span>';

        var panel = document.createElement('div');
        panel.className = 'chatbot-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-modal', 'false');

        var header = document.createElement('div');
        header.className = 'chatbot-header';
        header.innerHTML = [
    '    <div class="chatbot-avatar">',
    '        <img src="img/itech-logo.png" alt="I-Tech Media Logo">',
    '    </div>',
    '    <div class="chatbot-info">',
    '        <div class="chatbot-title">I-Tech Media Assistant</div>',
    '        <div class="chatbot-status">Online</div>',
    '    </div>',
          '<button type="button" class="chatbot-close"><i class="fa fa-times"></i></button>',
        ].join("\n");

        var body = document.createElement('div');
        body.className = 'chatbot-body';
        body.setAttribute('aria-live', 'polite');

        var chips = document.createElement('div');
        chips.className = 'chatbot-chips';

        var form = document.createElement('form');
        form.className = 'chatbot-form';
        form.innerHTML = [
            '<input type="text" class="chatbot-input" maxlength="300" autocomplete="off">',
            '<button type="submit" class="chatbot-send"><i class="fa fa-paper-plane"></i></button>'
        ].join('\n');

        panel.appendChild(header);
        panel.appendChild(body);
        panel.appendChild(chips);
        panel.appendChild(form);
        document.body.appendChild(toggle);
        document.body.appendChild(panel);

        panels = {
            toggle: toggle,
            panel: panel,
            title: header.querySelector('.chatbot-title'),
            status: header.querySelector('.chatbot-status'),
            close: header.querySelector('.chatbot-close'),
            body: body,
            chips: chips,
            input: form.querySelector('.chatbot-input'),
            send: form.querySelector('.chatbot-send'),
            greeted: false
        };

        applyLanguage();

        toggle.addEventListener('click', function () {
            if (panel.classList.contains('open')) {
                closeChat();
            } else {
                openChat();
            }
        });
        panels.close.addEventListener('click', closeChat);

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            send(panels.input.value);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && panel.classList.contains('open')) {
                closeChat();
            }
        });

        if (window.MutationObserver) {
            new MutationObserver(applyLanguage).observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['lang']
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
    } else {
        build();
    }
})();
