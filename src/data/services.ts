import { Service } from "@/types/services";

const services: Service[] = [
    {
      id: 1,
      specialization: 'Cardiologist',
      description: 'Cardiologists are medical doctors who specialize in diagnosing and treating diseases or conditions of the heart and blood vessels. They help patients manage heart disease, provide screenings and tests, and offer advice on heart-healthy living.',
      href: '/cardiology',
      imageUrl: 'https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40e1_medical-service-one.svg'
    },
    {
      id: 2,
      specialization: 'Pulmonary',
      description: 'Pulmonologists are medical doctors who specialize in the respiratory system, including the lungs and airways. They diagnose and treat conditions such as asthma, chronic obstructive pulmonary disease (COPD), and lung cancer.',
      href: '/pulmonology',
      imageUrl:'https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40df_medical-service-two.svg'
    },
    {
      id: 3,
      specialization: 'Radiology',
      description: 'Radiologists are medical doctors who specialize in diagnosing and treating diseases and injuries using medical imaging techniques such as X-rays, CT scans, and MRIs. They work closely with other healthcare professionals to help guide patient care.',
      href: '/radiology',
      imageUrl:'https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40e2_medical-service-three.svg'


    },
    {
      id: 4,
      specialization: 'Urology',
      description: 'Urologists are medical doctors who specialize in the urinary tract system and male reproductive system. They diagnose and treat conditions such as urinary tract infections, kidney stones, and prostate cancer. Urologists also perform surgeries such as vasectomies and kidney stone removal.',
      href: '/urology',
      imageUrl:'https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40e0_medical-service-four.svg'

    },
    {
      id: 5,
      specialization: 'Neurology',
      description: 'Neurologists are medical doctors who specialize in diagnosing and treating disorders of the nervous system, including the brain, spinal cord, and nerves. They treat conditions such as epilepsy, multiple sclerosis, and Parkinson\'s disease, and work to improve the quality of life for patients with these conditions.',
      href: '/neurology',
      imageUrl:'https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40dd_medical-service-five.svg'

    },
    {
      id: 6,
      specialization: 'Hypnotherapy',
      description: 'Hypnotherapy is a form of therapy that uses hypnosis to help patients achieve a state of focused attention and heightened suggestibility. It can be used to treat a variety of conditions, including phobias, anxiety, and chronic pain. Hypnotherapy can also be used to help patients change habits, such as smoking or overeating.',
      href: '/hypnotherapy',
      imageUrl:'https://assets-global.website-files.com/65bb1ade509e90321a2f3fb7/65bb1ade509e90321a2f40de_medical-service-six.svg'

    },
  ];
  
  export default services;
  