import { useParams } from 'react-router';
import { React, useEffect } from 'react';
import useData from '../../hooks/useData';



const Details = () => {
    const services =
        [
            {
                name: "CANCER SURGERY",
                short_details: "The Division of Cancer Surgery incorporates The Departments of Surgical Oncology, Anaesthesia and Pain Medicine, and The Perioperative Service.",
                details: "It provides a comprehensive anaesthetic and surgical service for patients requiring surgery for cancer, excluding neurosurgery and thoracic surgery, which is provided by our VCCC partners at the Royal Melbourne Hospital.  Care is delivered through an integrated multidisciplinary approach, utilising purpose built, state of the art infrastructure. This involves new integrated operating theatres, including intraoperative radiotherapy, 2-D and 3-D laparoscopic equipment, and an established Di Vinci Robotic program.  Research is one of the 3 pillars of the Division, along with Clinical Care, and Education and Training. Research includes clinical, translational, and basic science research, and is embedded with the clinical program.  Education and Training is integral to the philosophy of the Division, and the Division undertakes training for resident, registrars, and fellows, across surgery in general and a range of surgical subspecialties, along with anaesthesia and pain medicine.",
                image: "https://i.ibb.co/QCkcQ8S/1.jpg",
                specialist: "Dr. Sophie Texas",
                cost: 100000,
                id: 6301,
                id2: 7301
            },
            {
                name: "HAEMATOLOGICAL TREATMENTS",
                short_details: "Haematologists at Rupom Care use a range of specialised treatments and treatment plans to treat blood cancers.",
                details: "Haematological cancers include various types of blood cancers and related diseases including acute and chronic leukaemias, myelodysplastic syndromes, myeloproliferative disorders, aplastic anaemia, Hodgkin’s and non-Hodgkin’s lymphoma, multiple myeloma and plasma cell disorders.    Whilst there are special treatments for haematological diseases, treatment for blood cancers may also include chemotherapy, radiation therapy or surgery.   If you are receiving treatment for blood cancer you will be looked after by a treating haematologist who will coordinate your treatment plan, discuss your treatment options and explain your treatments to you. However, you may receive care from a range of different experts.   Nurse-led services available within Peter Mac’s Haematology Service include nurse-led follow up for patients with skin lymphoma, patients post autograft, and post allogeneic bone marrow transplant. Specialist haematology nurses are also involved in the follow up and management of patients in the Late Effects Service.  Your case will be discussed at a multi-disciplinary team meeting, ensuring you receive the best care and treatment plan.  As a tertiary training institution, education is a primary focus for Peter Mac. During your time at Peter Mac, you will meet health professionals training at varies stages of education. Rupom care will always be delivered under the direct supervision of senior specialist staff.  Your treating team will provide you any treatment information and advice specific to you. Please ask your team any questions you might have or let them know if you have any concerns about your treatment.",
                image: "https://i.ibb.co/3pctQTk/2.jpg",
                specialist: "Dr. Alexis Dee",
                cost: 200000,
                id: 6302,
                id2: 7302
            },
            {
                name: "PAIN MANAGEMENT",
                short_details: "Pain experienced is a significant issue for most people with cancer. Not all patients will have pain, but for those who do it can have a huge impact on patients and their loved one.",
                details: "There are many cancers and many phases of the disease process (including diagnosis, treatment, palliation and survivorship).  The Acute and Persistent Cancer Pain (APCP) team provide evidence based, safe and effective pain management for patients with both current and past cancers. The APCP team are highly skilled in using many different kinds of medicines and non-drug methods that can help relieve pains.  The APCP clinic is able to provide holistic, intra-disciplinary management for people in all stages of their cancer journey from diagnosis, through treatment to long term follow up.   The APCP at Victorian Comprehensive Cancer Centre is an accredited training facility for the Faculty of Pain Medicine, Australian and New Zealand College of Anaesthetists, the professional organisation for specialist pain medicine physicians (Fellows).",
                image: "https://i.ibb.co/bmdBSgb/3.jpg",
                specialist: "Dr. Elizabeth",
                cost: 300000,
                id: 6303,
                id2: 7303
            },
            {
                name: "RADIATION THERAPY",
                short_details: "Radiation therapy is a form of cancer treatment that uses radiation (x-rays).",
                details: "Radiation therapy may be given on its own, or with other forms of cancer treatment such as chemotherapy or surgery. Like having an x-ray picture, radiation therapy is painless.   Radiation therapy is a localised treatment, which means that it generally only affects the part of your body that requires treatment. Most of the time radiation therapy needs to be delivered over a number of days or weeks. The majority of our patients come to Peter Mac for about half an hour each day, and are otherwise able to maintain their usual activities. The radiation therapy team works together to ensure the best approach to suit your individual needs.  Peter Mac has Australia's largest specialist radiation therapy centre, offering world-class radiation therapy and the latest training and equipment to deliver the best available treatment to you.  Peter Mac accepts referrals from GPs and specialists to our consultant Radiation Oncologists at our sites in Melbourne (VCCC building), Bendigo, Box Hill, Moorabbin and Sunshine with no out-of-pocket expenses for patients and a maximum wait time of 1-2 weeks.",
                image: "https://i.ibb.co/cXv8X6y/4.jpg",
                specialist: "Dr. Nick Mortan",
                cost: 400000,
                id: 6304,
                id2: 7304
            },
            {
                name: "PSYCHOLOGY",
                short_details: "Our team of clinical psychologists use a range of techniques and therapies to help people with cancer and their families adjust to the emotional and psychological challenges of cancer.",
                details: "Our clinical psychology team works closely with psychiatrists, social workers and music therapists as part of the Psychosocial Oncology Program.   Cancer affects people in many different ways.  Common emotional and psychological concerns include anxiety, fear of cancer recurrence or progression, pain, sleep difficulties, depression, worry about fertility, disfigurement, sexual functioning and the impact that the cancer may have on those around you.   Our clinical psychology team offer a range of psychological therapies and interventions, such as cognitive behaviour therapy, mindfulness, acceptance and commitment therapy and existential therapy. Our psychologists will adapt their approach to meet your needs. They may offer individual, couple or family consultations.  Our clinical psychologists only use treatments that are effective and safe (evidence-based treatments).   The Psychology Department also provide a specialist Can-Sleep service aimed at improving night-time sleep problems (such as insomnia) for people with cancer.   Appointments with a clinical psychologist are approximately 45 minutes in duration. Your initial consultation will involve a discussion about your cancer situation and impact of your diagnosis/treatment on yourself and your family and friends. People can often benefit from one session alone, while others find that periodic or regular sessions are helpful for them. You do not need to bring anything to your sessions; this is a free service and interpreter services can also be arranged.",
                image: "https://i.ibb.co/DzMTcWH/5.jpg",
                specialist: "Dr. Chuck Nortan",
                cost: 500000,
                id: 6305,
                id2: 7305
            },
            {
                name: "DENTAL ONCOLOGY",
                short_details: "The Dental Oncology Service provides specialised services for patients undergoing treatment, primarily for head and neck, blood, and skin cancers.",
                details: "Dental oncology provides a number of services to patients, including assessment of the mouth and teeth before radiation therapy and chemotherapy, preparation of the mouth before radiation therapy, diagnostic assessment of lesions inside the mouth preparation of complex oral devices to aid radiation therapy treatment,management of the mouth and associated structures during and after radiation therapy and chemotherapy,preparation of prostheses, which may be required as a result of surgery, radiation therapy or chemotherapy to the head and neck region.Rupom Care does not offer general dental services.",
                image: "https://i.ibb.co/hBYKT64/6.jpg",
                specialist: "Dr. Emilia Martinez",
                cost: 600000,
                id: 6306,
                id2: 7306
            },

        ]




    const { serviceId } = useParams();

    // let found = data.find(e => e.id === "serviceId");
    console.log(services);
    console.log(parseInt(serviceId));

    let found = services.find(e => e.id === parseInt(serviceId));




    return (
        <div className="mt-5 pt-5">
            <h1> Details:</h1>

            <img src={found.image} className="w-50" alt="..." />
            <h4 className="mt-3">{found.name}</h4>
            <p className="text-start container px-5">{found.short_details}</p>
            <div className="text-start container px-5">
                <p>Details: {found.details}</p>
                <p>Specialist: {found.specialist}</p>
                <p>Cost:{found.cost}</p>
            </div>

        </div>
    );
};

export default Details;