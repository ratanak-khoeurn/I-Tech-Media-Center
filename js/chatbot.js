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
            welcome: "Hi! I'm the I-Tech Media assistant. Ask me about courses, enrollment, fees, schedules, location or contact details.",
            chips: ['Courses', 'Enrollment', 'Fees', 'Schedule', 'Contact']
        },
        km: {
            title: 'ជំនួយការ I-Tech Media',
            subtitle: 'អនឡាញ • ឆ្លើយតបភ្លាមៗ',
            placeholder: 'សួរអំពីវគ្គសិក្សា តម្លៃ ម៉ោងរៀន...',
            send: 'ផ្ញើសារ',
            open: 'បើកការសន្ទនា',
            close: 'បិទការសន្ទនា',
            welcome: 'សួស្តី! ខ្ញុំជាជំនួយការរបស់ I-Tech Media។ សួរខ្ញុំអំពីវគ្គសិក្សា ការចុះឈ្មោះ តម្លៃ ម៉ោងរៀន ទីតាំង ឬទំនាក់ទំនង។',
            chips: ['វគ្គសិក្សា', 'ការចុះឈ្មោះ', 'តម្លៃ', 'ម៉ោងរៀន', 'ទំនាក់ទំនង']
        }
    };

    var REPLIES = {
        en: {
            greeting: {
                text: "Hi! I'm the I-Tech Media assistant. Ask me about courses, enrollment, fees, schedules, location or contact details."
            },
            courses: {
                text: "Here's what you can study at I-Tech Media:\n• Graphic Design and UX/UI Design\n• Video Editing, Photography and Videography\n• 3D Modeling, Rendering and Animation\n• Computer Office\n• Pearson and Microsoft IT certifications\n\nWould you like the full course list or help enrolling?",
                links: [['Full course list', 'menu.html'], ['Enroll online', 'booking.html']]
            },
            enrollment: {
                text: "Enrolling starts with the online admission form:\n1. Open the Enroll Online page\n2. Complete the admission form (personal, contact and education details)\n3. Submit — our team will contact you\n\nYou can also call us if you need help choosing a course.",
                links: [['Enroll online', 'booking.html'], ['Contact us', 'contact.html']]
            },
            fees: {
                text: "Tuition depends on the course and schedule. Please contact our team for the current fee, payment options and any promotions — we're happy to help you choose a program that fits your budget.",
                links: [['Contact for fees', 'contact.html'], ['View courses', 'menu.html']]
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
                text: "You can reach us at:\n• Phone: (+855) 096 582 8662 / 092 426 205\n• Email: info@itechmediakh.com\n• Facebook: I-Tech Media School\n\nOur team usually replies during office hours.",
                links: [['Contact page', 'contact.html'], ['Email us', 'mailto:info@itechmediakh.com'], ['Facebook', 'https://www.facebook.com/itechmediaschool']]
            },
            certification: {
                text: "I-Tech Media is a Pearson Silver Partner. Our IT certification tracks prepare you for Microsoft and IT Specialist exams, including:\n• Microsoft Modern Desktops (MD-102)\n• IT Specialist Software Development (INF-305)\n• IT Specialist Artificial Intelligence (INF-307)\n• Microsoft Data Engineering on Azure (DP-203)\n• AI Azure AI Fundamentals (AI-900)\n\nSee the course page for details.",
                links: [['IT courses', 'menu.html']]
            },
            instructors: {
                text: 'Our instructors are experienced professionals in design, video, 3D and IT. Meet them on the Instructors page.',
                links: [['Meet our instructors', 'team.html']]
            },
            testimonials: {
                text: 'Our students study graphic design, video editing, 3D animation and IT. Read their feedback on the Testimonials page.',
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
                text: "Sure — our team can help you directly:\n• Phone: (+855) 096 582 8662 / 092 426 205\n• Email: info@itechmediakh.com\n\nYou can also send a message from the contact page.",
                links: [['Contact us', 'contact.html'], ['Email us', 'mailto:info@itechmediakh.com']]
            },
            thanks: {
                text: "You're welcome! Anything else I can help you with?"
            },
            bye: {
                text: 'Goodbye! Feel free to come back anytime.'
            },
            fallback: {
                text: "I'm not sure about that yet. I can help with courses, enrollment, fees, schedules, location and contact details. For anything else, please reach our team:",
                links: [['Contact us', 'contact.html'], ['Email us', 'mailto:info@itechmediakh.com']]
            }
        },
        km: {
            greeting: {
                text: 'សួស្តី! ខ្ញុំជាជំនួយការរបស់ I-Tech Media។ សួរខ្ញុំអំពីវគ្គសិក្សា ការចុះឈ្មោះ តម្លៃ ម៉ោងរៀន ទីតាំង ឬទំនាក់ទំនង។'
            },
            courses: {
                text: 'អ្វីដែលអ្នកអាចរៀននៅ I-Tech Media៖\n• រចនាក្រាហ្វិក និង UX/UI\n• កាត់តវីដេអូ ការថតរូប និងការថតវីដេអូ\n• គំរូ 3D ការបង្ហាញ និងចលនា\n• កុំព្យូទ័រការិយាល័យ\n• វិញ្ញាបនបត្រ IT របស់ Pearson និង Microsoft\n\nតើអ្នកចង់មើលវគ្គសិក្សាទាំងអស់ ឬចង់ចុះឈ្មោះឬ?',
                links: [['វគ្គសិក្សាទាំងអស់', 'menu.html'], ['ចុះឈ្មោះតាមអនឡាញ', 'booking.html']]
            },
            enrollment: {
                text: 'ការចុះឈ្មោះចាប់ផ្តើមពីទម្រង់ចុះឈ្មោះតាមអនឡាញ៖\n1. បើកទំព័រចុះឈ្មោះតាមអនឡាញ\n2. បំពេញទម្រង់ចុះឈ្មោះ (ព័ត៌មានផ្ទាល់ខ្លួន ទំនាក់ទំនង និងការសិក្សា)\n3. ដាក់ស្នើ — ក្រុមការងារយើងនឹងទាក់ទងអ្នក\n\nអ្នកក៏អាចទូរស័ព្ទមកយើង ប្រសិនបើត្រូវការការណែនាំជ្រើសរើសវគ្គសិក្សា។',
                links: [['ចុះឈ្មោះតាមអនឡាញ', 'booking.html'], ['ទំនាក់ទំនងយើង', 'contact.html']]
            },
            fees: {
                text: 'តម្លៃវគ្គសិក្សាអាស្រ័យលើកម្មវិធី និងកាលវិភាគ។ សូមទាក់ទងក្រុមការងារយើងសម្រាប់តម្លៃបច្ចុប្បន្ន ជម្រើសការបង់ប្រាក់ និងការបញ្ចុះតម្លៃ។ យើងរីករាយជួយអ្នកជ្រើសរើសកម្មវិធីដែលសមនឹងថវិការបស់អ្នក។',
                links: [['ទាក់ទងអំពីតម្លៃ', 'contact.html'], ['មើលវគ្គសិក្សា', 'menu.html']]
            },
            schedule: {
                text: 'ម៉ោងធ្វើការ៖\n• ចន្ទ - សុក្រ៖ 8:00 ព្រឹក – 7:30 ល្ងាច\n• សៅរ៍ - អាទិត្យ៖ 8:30 ព្រឹក – 11:30 ព្រឹក\n\nថ្នាក់រៀនមានវេនព្រឹក ល្ងាច និងចុងសប្តាហ៍។ សូមទាក់ទងយើងសម្រាប់កាលវិភាគវគ្គសិក្សារបស់អ្នក។',
                links: [['ទំនាក់ទំនងយើង', 'contact.html']]
            },
            location: {
                text: 'អាសយដ្ឋាន៖ Building #108, St. 472, Sangkat Toul Tom Poung I, Khan Chamkarmorn, Phnom Penh។\n\nទំព័រទំនាក់ទំនងមានផែនទី និងការណែនាំផ្លូវ។',
                links: [['ផែនទី និងទំនាក់ទំនង', 'contact.html']]
            },
            contact: {
                text: 'អ្នកអាចទាក់ទងយើងតាម៖\n• ទូរស័ព្ទ៖ (+855) 096 582 8662 / 092 426 205\n• អ៊ីមែល៖ info@itechmediakh.com\n• ហ្វេសប៊ុក៖ I-Tech Media School\n\nក្រុមការងារយើងឆ្លើយតបក្នុងម៉ោងធ្វើការ។',
                links: [['ទំព័រទំនាក់ទំនង', 'contact.html'], ['ផ្ញើអ៊ីមែល', 'mailto:info@itechmediakh.com'], ['ហ្វេសប៊ុក', 'https://www.facebook.com/itechmediaschool']]
            },
            certification: {
                text: 'I-Tech Media គឺជាដៃគូ Silver របស់ Pearson។ កម្មវិធីវិញ្ញាបនបត្រ IT របស់យើងរៀបចំអ្នកសម្រាប់ការប្រឡង Microsoft និង IT Specialist រួមមាន៖\n• Microsoft Modern Desktops (MD-102)\n• IT Specialist Software Development (INF-305)\n• IT Specialist Artificial Intelligence (INF-307)\n• Microsoft Data Engineering on Azure (DP-203)\n• AI Azure AI Fundamentals (AI-900)\n\nសូមមើលទំព័រវគ្គសិក្សាសម្រាប់ព័ត៌មានលម្អិត។',
                links: [['វគ្គសិក្សា IT', 'menu.html']]
            },
            instructors: {
                text: 'គ្រូបង្គោលរបស់យើងជាអ្នកជំនាញដែលមានបទពិសោធន៍ក្នុងរចនា វីដេអូ 3D និង IT។ ជួបពួកគាត់នៅទំព័រគ្រូបង្គោល។',
                links: [['គ្រូបង្គោលរបស់យើង', 'team.html']]
            },
            testimonials: {
                text: 'សិស្សរបស់យើងរៀនរចនាក្រាហ្វិក កាត់តវីដេអូ ចលនា 3D និង IT។ អានមតិរបស់ពួកគេនៅទំព័រមតិអ្នករៀន។',
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
                text: 'បាទ/ចាស — ក្រុមការងារយើងអាចជួយអ្នកដោយផ្ទាល់៖\n• ទូរស័ព្ទ៖ (+855) 096 582 8662 / 092 426 205\n• អ៊ីមែល៖ info@itechmediakh.com\n\nអ្នកក៏អាចផ្ញើសារតាមទំព័រទំនាក់ទំនង។',
                links: [['ទំនាក់ទំនងយើង', 'contact.html'], ['ផ្ញើអ៊ីមែល', 'mailto:info@itechmediakh.com']]
            },
            thanks: {
                text: 'មិនអីទេ! តើមានអ្វីទៀតដែលខ្ញុំអាចជួយបាន?'
            },
            bye: {
                text: 'លាហើយ! សូមត្រឡប់មកវិញពេលណាក៏បាន។'
            },
            fallback: {
                text: 'សូមអភ័យទោស ខ្ញុំមិនទាន់យល់សំណួរនេះទេ។ ខ្ញុំអាចជួយអំពីវគ្គសិក្សា ការចុះឈ្មោះ តម្លៃ ម៉ោងរៀន ទីតាំង និងទំនាក់ទំនង។ សម្រាប់រឿងផ្សេង សូមទាក់ទងក្រុមការងារយើង៖',
                links: [['ទំនាក់ទំនងយើង', 'contact.html'], ['ផ្ញើអ៊ីមែល', 'mailto:info@itechmediakh.com']]
            }
        }
    };

    var INTENTS = [
        { id: 'fees', kw: ['fee', 'fees', 'price', 'prices', 'cost', 'costs', 'tuition', 'how much', 'payment', 'installment', 'discount', 'promotion', 'តម្លៃ', 'ថ្លៃ', 'បង់ប្រាក់', 'ចំណាយ', 'បញ្ចុះតម្លៃ'] },
        { id: 'schedule', kw: ['schedule', 'class time', 'class times', 'opening hours', 'open', 'hours', 'morning', 'evening', 'weekend', 'ម៉ោង', 'កាលវិភាគ', 'ព្រឹក', 'ល្ងាច', 'ចុងសប្តាហ៍', 'បើក'] },
        { id: 'enrollment', kw: ['enroll', 'enrollment', 'register', 'registration', 'apply', 'application', 'admission', 'sign up', 'join', 'booking', 'ចុះឈ្មោះ', 'ដាក់ពាក្យ', 'ចាប់ផ្តើមរៀន'] },
        { id: 'certification', kw: ['pearson', 'certificate', 'certificates', 'certification', 'certified', 'microsoft', 'azure', 'it specialist', 'exam', 'md-102', 'inf-305', 'inf-307', 'dp-203', 'ai-900', 'វិញ្ញាបនបត្រ', 'សញ្ញាបត្រ', 'ប្រឡង'] },
        { id: 'location', kw: ['where', 'location', 'address', 'map', 'direction', 'directions', 'campus', 'located', 'ទីតាំង', 'អាសយដ្ឋាន', 'ផែនទី', 'នៅឯណា', 'នៅណា'] },
        { id: 'contact', kw: ['contact', 'phone', 'call', 'email', 'telegram', 'facebook', 'linkedin', 'youtube', 'message', 'ទំនាក់ទំនង', 'ទូរស័ព្ទ', 'អ៊ីមែល', 'ហ្វេសប៊ុក', 'តេឡេក្រាម'] },
        { id: 'human', kw: ['human', 'agent', 'real person', 'speak to someone', 'talk to someone', 'customer service', 'support', 'staff', 'មនុស្ស', 'បុគ្គលិក', 'ជួយផ្ទាល់'] },
        { id: 'instructors', kw: ['instructor', 'instructors', 'teacher', 'teachers', 'trainer', 'trainers', 'គ្រូ', 'គ្រូបង្គោល', 'បង្គោល'] },
        { id: 'testimonials', kw: ['testimonial', 'testimonials', 'review', 'reviews', 'feedback', 'student say', 'មតិ', 'មតិអ្នករៀន', 'ការវាយតម្លៃ'] },
        { id: 'events', kw: ['event', 'events', 'workshop', 'workshops', 'open day', 'info session', 'career talk', 'កម្មវិធី', 'សិក្ខាសាលា', 'ថ្ងៃបើកទ្វារ'] },
        { id: 'news', kw: ['news', 'update', 'updates', 'announcement', 'announcements', 'blog', 'ព័ត៌មាន', 'បច្ចុប្បន្នភាព', 'ជូនដំណឹង'] },
        { id: 'gallery', kw: ['gallery', 'photo', 'photos', 'picture', 'pictures', 'album', 'images', 'graduation photo', 'វិចិត្រសាល', 'រូបភាព', 'រូបថត'] },
        { id: 'courses', kw: ['course', 'courses', 'class', 'classes', 'program', 'programs', 'learn', 'study', 'training', 'graphic', 'design', 'ux', 'ui', 'video', 'editing', 'photo', 'photography', 'videography', '3d', 'animation', 'office', 'computer', 'it course', 'it courses', 'វគ្គ', 'វគ្គសិក្សា', 'រៀន', 'សិក្សា', 'បណ្តុះបណ្តាល', 'រចនា', 'វីដេអូ', 'ថតរូប', 'ចលនា', 'កុំព្យូទ័រ', 'ជំនាញ'] },
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

    function detect(text) {
        var input = ' ' + text.toLowerCase().replace(/\s+/g, ' ') + ' ';
        var bestId = null;
        var bestScore = 0;
        for (var i = 0; i < INTENTS.length; i++) {
            var intent = INTENTS[i];
            var score = 0;
            for (var j = 0; j < intent.kw.length; j++) {
                if (hasKeyword(input, intent.kw[j])) {
                    score += intent.kw[j].split(/\s+/).length;
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestId = intent.id;
            }
        }
        return bestId || 'fallback';
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
            addMessage('bot', replyFor(detect(text)));
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
