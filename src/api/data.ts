import { IQuestionMeta } from './types';

const firstPageData: IQuestionMeta[] = [
  {
    id: 'firstName',
    question: 'FIRST NAME:',
    required: true,
    storeType: 'applicant',
    type: 'text',
  },
  {
    id: 'lastName',
    question: 'LAST NAME:',
    required: true,
    storeType: 'applicant',
    type: 'text',
  },
  {
    id: 'email',
    question: 'EMAIL:',
    required: true,
    storeType: 'applicant',
    type: 'text',
  },
  {
    id: 'phone',
    question: 'PHONE:',
    required: true,
    storeType: 'applicant',
    type: 'phone',
  },
  {
    id: 'resume',
    question: 'UPLOAD RESUME:',
    storeType: 'applicant',
    type: 'file',
  },
  {
    id: 'coverLetter',
    question: 'COVER LETTER(OPTIONAL)',
    storeType: 'applicant',
    type: 'textarea',
  },
  {
    id: 'termsAndConditions',
    storeType: 'applicant',
    text: "By submitting your application, you agree to replacement's Terms of Use, Privacy Policy, and the employer's Privacy Policy.",
    type: 'information',
  },
  {
    id: 'additionalQuestionsOpen',
    type: 'pagebreak',
  },
];

const testQuestion: IQuestionMeta[] = [
  {
    id: '10_12_0_GENERAL_MINIMUM_AGE',
    type: 'radio',
    question: 'Are you at least 16 years old? (You must be at least 16 to apply)',
    required: false,
    options: [
      {
        value: 21,
        label: 'No',
      },
      {
        value: 20,
        label: 'Yes',
      },
    ],
  },
  {
    id: '10_12_0_GENERAL_MINIMUM_AGE2',
    type: 'checkbox',
    question: 'Are you at least 16 years old?',
    required: true,
    options: [
      {
        value: 21,
        label: 'No',
      },
      {
        value: 20,
        label: 'Yes',
      },
    ],
  },
  {
    id: 'hierarchical',
    type: 'hierarchical',
    question: 'State',
    required: true,
    options: [
      {
        value: '0',
        label: 'California',
      },
      {
        value: '1',
        label: 'Texas',
      },
      {
        value: '2',
        label: 'New York',
      },
    ],
    hierarchicalOptions: [
      {
        id: 'cali_cities',
        options: [
          {
            value: '0',
            label: 'San Francisco',
          },
          {
            value: '1',
            label: 'Los Angeles',
          },
        ],
        condition: {
          id: 'hierarchical',
          value: '0',
        },
      },
      {
        id: 'texas_cities',
        options: [
          {
            value: '0',
            label: 'San Antonio',
          },
          {
            value: '1',
            label: 'Austin',
          },
        ],
        condition: {
          id: 'hierarchical',
          value: '1',
        },
      },
      {
        id: 'sa_zipcodes',
        options: [
          {
            value: '0',
            label: '78212',
          },
          {
            value: '1',
            label: '78209',
          },
        ],
        condition: {
          id: 'texas_cities',
          value: '0',
        },
      },
    ],
  },
];

const testFullQuestion: IQuestionMeta[] = [
  {
    id: 'General/Other_open',
    type: 'pagebreak',
  },
  {
    id: 'General/Other',
    type: 'information',
    text: 'General/Other',
    fontsize: 8,
  },
  {
    id: '10_12_0_GENERAL_MINIMUM_AGE',
    type: 'select',
    question: 'Are you at least 16 years old? (You must be at least 16 to apply)',
    required: false,
    options: [
      {
        value: 21,
        label: 'No',
      },
      {
        value: 20,
        label: 'Yes',
      },
    ],
  },
  {
    id: '10_14_0_GENERAL_DATE_AVAILABLE',
    type: 'date',
    question: 'Date Available:',
    required: false,
    format: 'MM/dd/yyyy',
  },
  {
    id: '10_15_0_GENERAL_MINIMUM_HOURLY_RATE',
    type: 'text',
    question: 'Minimum Hourly Rate:',
    required: false,
    format: 'decimal',
  },
  {
    id: '10_16_0_GENERAL_WILL_WORK_OVERTIME',
    type: 'select',
    question: 'Are you willing to work overtime?',
    required: false,
    options: [
      {
        value: 26,
        label: 'No',
      },
      {
        value: 25,
        label: 'Yes',
      },
    ],
  },
  {
    id: '10_18_0_GENERAL_EMPLOYED_RELATIVE_NAME',
    type: 'text',
    question: 'If Yes, who?',
    required: false,
  },
  {
    id: '10_5538_0_102_WANT_TO_WORK_HERE',
    type: 'textarea',
    question: '<p>Please describe in a paragraph why you would want to work here?</p>',
    required: false,
  },
  {
    id: '10_5539_0_102_PLEASE_PROVIDE_YOUR_CURRENT_ZIPCODE',
    type: 'text',
    question: '<p>Please provide your current zip code</p>',
    required: false,
    format: 'numeric_text',
  },
  {
    id: '10_5540_0_102_CURRENT_EMAIL',
    type: 'text',
    question: '<p>Provide your current email address</p>',
    required: false,
  },
  {
    id: 'Employment History_open',
    type: 'pagebreak',
  },
  {
    id: 'Employment History',
    type: 'information',
    text: 'Employment History',
    fontsize: 8,
  },
  {
    id: '8_29_0_EMPLOYMENT_ORGANIZATION_NAME',
    type: 'text',
    question: 'Organization Name:',
    required: false,
  },
  {
    id: '8_42_0_EMPLOYMENT_ORGANIZATION_ADDRESS',
    type: 'text',
    question: 'Organization Address:',
    required: false,
  },
  {
    id: '8_43_0_EMPLOYMENT_ORGANIZATION_CITY',
    type: 'text',
    question: 'Organization City:',
    required: false,
  },
  {
    id: '8_44_0_EMPLOYMENT_ORGANIZATION_STATE',
    type: 'text',
    question: 'Organization State:',
    required: false,
  },
  {
    id: '8_46_0_EMPLOYMENT_ORGANIZATION_POSTAL_CODE',
    type: 'text',
    question: 'Organization Zip Code:',
    required: false,
    format: 'numeric_text',
  },
  {
    id: '8_47_0_EMPLOYMENT_ORGANIZATION_PHONE_NUMBER',
    type: 'text',
    question: 'Organization Phone Number:',
    required: false,
    format: 'numeric_text',
  },
  {
    id: '8_36_0_EMPLOYMENT_LAST_POSITION_TITLE',
    type: 'text',
    question: 'Your Last Position:',
    required: false,
  },
  {
    id: '8_32_0_EMPLOYMENT_TYPE',
    type: 'select',
    question: 'Employment Type:',
    required: false,
    options: [
      {
        value: 68,
        label: 'Contractor',
      },
      {
        value: 66,
        label: 'Full-Time',
      },
      {
        value: 70,
        label: 'Intern',
      },
      {
        value: 73,
        label: 'Other',
      },
      {
        value: 67,
        label: 'Part-Time',
      },
      {
        value: 72,
        label: 'Per Diem',
      },
      {
        value: 69,
        label: 'Temporary',
      },
      {
        value: 71,
        label: 'Volunteer',
      },
    ],
  },
  {
    id: '8_55_0_EMPLOYMENT_IS_CURRENT_EMPLOYER',
    type: 'select',
    question: 'Current Employer?',
    required: false,
    options: [
      {
        value: 85,
        label: 'Yes',
      },
      {
        value: 86,
        label: 'No',
      },
    ],
  },
  {
    id: '8_48_0_EMPLOYMENT_DATE_EMPLOYED_FROM',
    type: 'date',
    question: 'Employed From (MM/YYYY):',
    required: false,
    format: 'MM/yyyy',
  },
  {
    id: '8_49_0_EMPLOYMENT_DATE_EMPLOYED_TO',
    type: 'date',
    question: 'Employed To (MM/YYYY):',
    required: false,
    format: 'MM/yyyy',
  },
  {
    id: '8_53_0_EMPLOYMENT_REASON_FOR_LEAVING',
    type: 'textarea',
    question: 'Reason For Leaving:',
    required: false,
  },
  {
    id: '8_54_0_EMPLOYMENT_DUTIES',
    type: 'textarea',
    question: 'Your Duties:',
    required: false,
  },
  {
    id: '8_33_0_EMPLOYMENT_CAN_CONTACT_PREVIOUS_EMPLOYER',
    type: 'select',
    question: 'May we contact?',
    required: false,
    options: [
      {
        value: 65,
        label: 'No',
      },
      {
        value: 64,
        label: 'Yes',
      },
    ],
  },
  {
    id: 'Education_open',
    type: 'pagebreak',
  },
  {
    id: 'Education',
    type: 'information',
    text: 'Education',
    fontsize: 8,
  },
  {
    id: '9_59_0_EDUCATION_SCHOOL_NAME',
    type: 'text',
    question: 'School Name:',
    required: false,
  },
  {
    id: '9_60_0_EDUCATION_SCHOOL_TYPE',
    type: 'select',
    question: 'School Type:',
    required: false,
    options: [
      {
        value: 523,
        label: 'Certification',
      },
      {
        value: 96,
        label: 'College/Technical',
      },
      {
        value: 97,
        label: 'Graduate',
      },
      {
        value: 95,
        label: 'High School / GED',
      },
      {
        value: 98,
        label: 'Other',
      },
    ],
  },
  {
    id: '9_61_0_EDUCATION_SCHOOL_CITY',
    type: 'text',
    question: 'School City:',
    required: false,
  },
  {
    id: '9_62_0_EDUCATION_SCHOOL_STATE',
    type: 'text',
    question: 'School State:',
    required: false,
  },
  {
    id: '9_65_0_EDUCATION_GRADUATED',
    type: 'select',
    question: 'Did you Graduate?',
    required: false,
    options: [
      {
        value: 100,
        label: 'No',
      },
      {
        value: 99,
        label: 'Yes',
      },
    ],
  },
  {
    id: '9_68_0_EDUCATION_DATE_ATTENDED_FROM',
    type: 'date',
    question: 'Attended From (MM/YYYY):',
    required: false,
    format: 'MM/yyyy',
  },
  {
    id: '9_69_0_EDUCATION_DATE_ATTENDED_FROM',
    type: 'date',
    question: 'Attended To (MM/YYYY):',
    required: false,
    format: 'MM/yyyy',
  },
  {
    id: '9_64_0_EDUCATION_LAST_YEAR_COMPLETED',
    type: 'select',
    question: 'Number of Years Completed:',
    required: false,
    options: [
      {
        value: 131,
        label: '1 Year',
      },
      {
        value: 132,
        label: '2 Years',
      },
      {
        value: 133,
        label: '3 Years',
      },
      {
        value: 134,
        label: '4 Years',
      },
    ],
  },
  {
    id: '9_66_0_EDUCATION_DEGREE_CERTIFICATE',
    type: 'text',
    question: 'Degree/Certificate:',
    required: false,
  },
  {
    id: '9_67_0_EDUCATION_MAJOR_COURSES',
    type: 'text',
    question: 'Major/Courses:',
    required: false,
  },
  {
    id: 'References_open',
    type: 'pagebreak',
  },
  {
    id: 'References',
    type: 'information',
    text: 'References',
    fontsize: 8,
  },
  {
    id: '13_74_0_REFERENCE_NAME',
    type: 'text',
    question: "Reference's Name:",
    required: false,
  },
  {
    id: '13_75_0_REFERENCE_ORGANIZATION',
    type: 'text',
    question: "Reference's Organization:",
    required: false,
  },
  {
    id: '13_81_0_REFERENCE_OCCUPATION_POSITION',
    type: 'text',
    question: "Reference's Occupation/Position:",
    required: false,
  },
  {
    id: '13_77_0_REFERENCE_PHONE',
    type: 'text',
    question: "Reference's Telephone:",
    required: false,
    format: 'numeric_text',
  },
  {
    id: '13_78_0_REFERENCE_EMAIL',
    type: 'text',
    question: "Reference's Email Address:",
    required: false,
  },
  {
    id: '13_79_0_REFERENCE_RELATIONSHIP_TYPE',
    type: 'select',
    question: 'What relationship do you have with this person?',
    required: false,
    options: [
      {
        value: 116,
        label: 'Acquaintance',
      },
      {
        value: 117,
        label: 'Family',
      },
      {
        value: 118,
        label: 'Friend',
      },
      {
        value: 119,
        label: 'Other',
      },
      {
        value: 115,
        label: 'Professional',
      },
    ],
  },
  {
    id: '13_80_0_REFERENCE_RELATIONSHIP_LENGTH',
    type: 'select',
    question: 'How long have you known this person?',
    required: false,
    options: [
      {
        value: 121,
        label: '1 Year',
      },
      {
        value: 130,
        label: '10+ Years',
      },
      {
        value: 122,
        label: '2 Years',
      },
      {
        value: 123,
        label: '3 Years',
      },
      {
        value: 124,
        label: '4 Years',
      },
      {
        value: 125,
        label: '5 Years',
      },
      {
        value: 126,
        label: '6 Years',
      },
      {
        value: 127,
        label: '7 Years',
      },
      {
        value: 128,
        label: '8 Years',
      },
      {
        value: 129,
        label: '9 Years',
      },
      {
        value: 120,
        label: 'Less than 1 Year',
      },
    ],
  },
  {
    id: 'Voluntary Disclosure_open',
    type: 'pagebreak',
  },
  {
    id: 'Voluntary Disclosure',
    type: 'information',
    text: '<p>This company is dedicated to a policy of affirmative action and equal opportunity in employment without regard to race, religion, gender, sexual orientation, national origin, age, veteran or disabled status, or any other protected class. Reasonable accommodation will be made as appropriate to enable any employee or applicant for employment to safely and properly perform the job applied for as requested and as appropriate.</p>\n<p>The following information is necessary for this company to evaluate its hiring practices and to track its progress and effectiveness in complying with its Affirmative Action Plan and equal employment policies. The information is voluntary and will be kept confidential insofar as possible. Information provided will not be negatively considered in any part of the selection process.</p>',
    fontsize: 8,
  },
  {
    id: '16_98_0_EEOC_COMPLIANCE_SEX',
    type: 'select',
    question: 'Sex/Gender:',
    required: true,
    options: [
      {
        value: 190,
        label: 'Female',
      },
      {
        value: 191,
        label: 'I choose not to provide gender information at this time.',
      },
      {
        value: 189,
        label: 'Male',
      },
    ],
  },
  {
    id: '16_99_0_EEOC_COMPLIANCE_ETHNIC_BACKGROUND',
    type: 'select',
    question: 'Ethnic Background:',
    required: true,
    options: [
      {
        value: 193,
        label:
          'American Indian or Alaskan Native (Not Hispanic or Latino) - A person having origins in any of the original peoples of North and South America (including Central America), and who maintain tribal affiliation or community attachment.',
      },
      {
        value: 195,
        label:
          'Asian (Not Hispanic or Latino) - A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian Subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam.',
      },
      {
        value: 194,
        label:
          'Black or African American (Not Hispanic or Latino) - A person having origins in any of the black racial groups of Africa.',
      },
      {
        value: 192,
        label:
          'Hispanic or Latino - A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin regardless of race.  OR CHOOSE TO IDENTIFY BY RACE AS LISTED BELOW RACE: ',
      },
      {
        value: 197,
        label:
          'Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino) - A person having origins in any of the peoples of Hawaii, Guam, Samoa, or other Pacific Islands.',
      },
      {
        value: 198,
        label:
          'Two or More Races (Not Hispanic or Latino) - All persons who identify with more than one of the above five races.',
      },
      {
        value: 196,
        label:
          'White (Not Hispanic or Latino) - A person having origins in any of the original peoples of Europe, the Middle East, or North Africa.',
      },
      {
        value: 199,
        label: 'I choose not to provide race information at this time.',
      },
    ],
  },
  {
    id: '16_100_0_EEOC_COMPLIANCE_DATE_OF_BIRTH',
    type: 'date',
    question: 'Date Of Birth:',
    required: false,
    format: 'MM/dd/yyyy',
  },
  {
    id: '16_102_0_EEOC_COMPLIANCE_VET_100_A',
    type: 'select',
    question: 'VETS-4212:',
    required: true,
    options: [
      {
        value: 207,
        label:
          "Recently Separated Veterans - Any veteran who served on active duty in the U.S. military, ground, naval or air service during the one year period beginning on the date of such veteran's discharge or release from active duty.",
      },
      {
        value: 206,
        label:
          'Armed Forces service medal veterans - Veterans who, while serving on active duty in the Armed Forces, participated in a United States military operation for which an Armed Forces service medal was awarded pursuant to Executive Order 12985 (61 Fed. Red. 1209).',
      },
      {
        value: 205,
        label:
          'Other Protected Veterans - Veterans who served on active duty in the U.S. military, ground, naval or air service during a war or in a campaign or expedition for which a campaign badge has been authorized.',
      },
      {
        value: 204,
        label: 'Not A Veteran',
      },
    ],
  },
  {
    id: '16_103_0_EEOC_COMPLIANCE_IS_VETERAN_2014',
    type: 'select',
    question: 'Veteran 2014:',
    required: true,
    options: [
      {
        value: 209,
        label: 'I AM NOT A PROTECTED VETERAN.',
      },
      {
        value: 210,
        label: "I DON'T WISH TO ANSWER.",
      },
      {
        value: 208,
        label: 'I IDENTIFY AS ONE OR MORE OF THE CLASSIFICATIONS OF PROTECTED VETERANS LISTED ABOVE.',
      },
    ],
  },
  {
    id: '16_104_0_EEOC_COMPLIANCE_IS_DISABLED',
    type: 'select',
    question: 'VOLUNTARY SELF-IDENTIFICATION OF DISABILITY',
    required: true,
    options: [
      {
        value: 211,
        label: 'Yes, I Have A Disability, Or Have A History/Record Of Having A Disability',
      },
      {
        value: 212,
        label: "No, I Don't Have A Disability, Or A History/Record Of Having A Disability",
      },
      {
        value: 213,
        label: "I Don't Wish To Answer",
      },
    ],
  },
  {
    id: 'Job Questions_open',
    type: 'pagebreak',
  },
  {
    id: 'Job Questions',
    type: 'information',
    text: 'Job Questions',
    fontsize: 8,
  },
  {
    id: '20_107_0_JOB_QUESTION_WILLING_TO_RELOCATE',
    type: 'select',
    question: 'Are you willing to relocate?',
    required: false,
    options: [
      {
        value: 215,
        label: 'No',
      },
      {
        value: 214,
        label: 'Yes',
      },
    ],
  },
  {
    id: '20_5431_0_102_TEXT',
    type: 'text',
    question: '<p>Please Enter some text</p>',
    required: false,
  },
  {
    id: '20_5432_0_102_TEXT_AREA',
    type: 'textarea',
    question: '<p>Enter some text</p>',
    required: false,
  },
  {
    id: '20_5433_0_102_TEST_QUESTION',
    type: 'select',
    question: '<p>Select a radio option</p>',
    required: false,
    options: [
      {
        value: 16049,
        label: 'Option 1',
      },
      {
        value: 16051,
        label: 'Option 3',
      },
      {
        value: 16050,
        label: 'Option 2',
      },
    ],
  },
  {
    id: '20_5434_0_102_CHECKBOX',
    type: 'multiselect',
    question: '<p>Checkbox</p>',
    required: false,
    options: [
      {
        value: 16052,
        label: 'Checkbox 1',
      },
      {
        value: 16053,
        label: 'Checkbox 2',
      },
      {
        value: 16054,
        label: 'Checkbox 3',
      },
    ],
  },
  {
    id: '20_5435_0_102_ZIP_CODE',
    type: 'text',
    question: '<p>Zip Code</p>',
    required: false,
    format: 'numeric_text',
  },
  {
    id: '20_5436_0_102_PHONE_NUMBER',
    type: 'text',
    question: '<p>Phone Number</p>',
    required: false,
    format: 'numeric_text',
  },
  {
    id: '20_5437_0_102_EMAIL_ADDRESS',
    type: 'text',
    question: '<p>Email address</p>',
    required: false,
  },
  {
    id: '20_5438_0_102_HOW_MUCH',
    type: 'text',
    question: '<p>Enter a dollar amount</p>',
    required: false,
    format: 'decimal',
  },
  {
    id: '20_5439_0_102_SELECT_DATE',
    type: 'date',
    question: '<p>Select a date</p>',
    required: false,
    format: 'MM/yyyy',
  },
  {
    id: '20_5442_0_102_STATE_WHERE_ARE_YOU',
    type: 'select',
    question: '<p>What state are you in</p>',
    required: false,
    options: [
      {
        value: 1,
        label: 'Alaska',
      },
      {
        value: 2,
        label: 'Alabama',
      },
      {
        value: 3,
        label: 'Arkansas',
      },
      {
        value: 4,
        label: 'Arizona',
      },
      {
        value: 5,
        label: 'California',
      },
      {
        value: 6,
        label: 'Colorado',
      },
      {
        value: 7,
        label: 'Connecticut',
      },
      {
        value: 8,
        label: 'District of Columbia',
      },
      {
        value: 9,
        label: 'Delaware',
      },
      {
        value: 10,
        label: 'Florida',
      },
      {
        value: 11,
        label: 'Georgia',
      },
      {
        value: 12,
        label: 'Hawaii',
      },
      {
        value: 13,
        label: 'Iowa',
      },
      {
        value: 14,
        label: 'Idaho',
      },
      {
        value: 15,
        label: 'Illinois',
      },
      {
        value: 16,
        label: 'Indiana',
      },
      {
        value: 17,
        label: 'Kansas',
      },
      {
        value: 18,
        label: 'Kentucky',
      },
      {
        value: 19,
        label: 'Louisiana',
      },
      {
        value: 20,
        label: 'Massachusetts',
      },
      {
        value: 21,
        label: 'Maryland',
      },
      {
        value: 22,
        label: 'Maine',
      },
      {
        value: 23,
        label: 'Michigan',
      },
      {
        value: 24,
        label: 'Minnesota',
      },
      {
        value: 25,
        label: 'Missouri',
      },
      {
        value: 26,
        label: 'Mississippi',
      },
      {
        value: 27,
        label: 'Montana',
      },
      {
        value: 28,
        label: 'North Carolina',
      },
      {
        value: 29,
        label: 'North Dakota',
      },
      {
        value: 30,
        label: 'Nebraska',
      },
      {
        value: 31,
        label: 'New Hampshire',
      },
      {
        value: 32,
        label: 'New Jersey',
      },
      {
        value: 33,
        label: 'New Mexico',
      },
      {
        value: 34,
        label: 'Nevada',
      },
      {
        value: 35,
        label: 'New York',
      },
      {
        value: 36,
        label: 'Ohio',
      },
      {
        value: 37,
        label: 'Oklahoma',
      },
      {
        value: 38,
        label: 'Oregon',
      },
      {
        value: 39,
        label: 'Pennsylvania',
      },
      {
        value: 40,
        label: 'Rhode Island',
      },
      {
        value: 41,
        label: 'South Carolina',
      },
      {
        value: 42,
        label: 'South Dakota',
      },
      {
        value: 43,
        label: 'Tennessee',
      },
      {
        value: 44,
        label: 'Texas',
      },
      {
        value: 45,
        label: 'Utah',
      },
      {
        value: 46,
        label: 'Virginia',
      },
      {
        value: 47,
        label: 'Vermont',
      },
      {
        value: 48,
        label: 'Washington',
      },
      {
        value: 49,
        label: 'Wisconsin',
      },
      {
        value: 50,
        label: 'West Virginia',
      },
      {
        value: 51,
        label: 'Wyoming',
      },
      {
        value: 52,
        label: 'Puerto Rico',
      },
      {
        value: 53,
        label: 'Ontario',
      },
      {
        value: 54,
        label: 'Quebec',
      },
      {
        value: 55,
        label: 'British Columbia',
      },
      {
        value: 56,
        label: 'Alberta',
      },
      {
        value: 57,
        label: 'Manitoba',
      },
      {
        value: 58,
        label: 'Saskatchewan',
      },
      {
        value: 59,
        label: 'Nova Scotia',
      },
      {
        value: 60,
        label: 'New Brunswick',
      },
      {
        value: 61,
        label: 'Newfoundland and Labrador',
      },
      {
        value: 62,
        label: 'Prince Edward Island',
      },
      {
        value: 63,
        label: 'Northwest Territories',
      },
      {
        value: 64,
        label: 'Yukon',
      },
      {
        value: 65,
        label: 'Nunavut',
      },
      {
        value: 66,
        label: 'Jervis Bay Territory',
      },
      {
        value: 67,
        label: 'New South Wales',
      },
      {
        value: 68,
        label: 'Northern Territory',
      },
      {
        value: 69,
        label: 'Queensland',
      },
      {
        value: 70,
        label: 'South Australia',
      },
      {
        value: 71,
        label: 'Tasmania',
      },
      {
        value: 72,
        label: 'Victoria',
      },
      {
        value: 73,
        label: 'Western Australia',
      },
      {
        value: 74,
        label: 'Acre',
      },
      {
        value: 75,
        label: 'Alagoaas',
      },
      {
        value: 76,
        label: 'Amapa',
      },
      {
        value: 77,
        label: 'Amazonas',
      },
      {
        value: 78,
        label: 'Bahia',
      },
      {
        value: 79,
        label: 'Ceara',
      },
      {
        value: 80,
        label: 'Distrito Federal',
      },
      {
        value: 81,
        label: 'Espirito Santo',
      },
      {
        value: 82,
        label: 'Goias',
      },
      {
        value: 83,
        label: 'Maranhao',
      },
      {
        value: 84,
        label: 'Mato Grasso',
      },
      {
        value: 85,
        label: 'Mato Grasso do Sul',
      },
      {
        value: 86,
        label: 'Minas Gerais',
      },
      {
        value: 87,
        label: 'Para',
      },
      {
        value: 88,
        label: 'Paraiba',
      },
      {
        value: 89,
        label: 'Parana',
      },
      {
        value: 90,
        label: 'Pernambuco',
      },
      {
        value: 91,
        label: 'Piaui',
      },
      {
        value: 92,
        label: 'Rio de Janeiro',
      },
      {
        value: 93,
        label: 'Rio Grande do Norte',
      },
      {
        value: 94,
        label: 'Rio Grande do Sul',
      },
      {
        value: 95,
        label: 'Rondonia',
      },
      {
        value: 96,
        label: 'Roraima',
      },
      {
        value: 97,
        label: 'Santa Catarina',
      },
      {
        value: 98,
        label: 'Sau Paolo',
      },
      {
        value: 99,
        label: 'Sergipe',
      },
      {
        value: 100,
        label: 'Tocantins',
      },
      {
        value: 101,
        label: 'A Coruna',
      },
      {
        value: 102,
        label: 'Alava',
      },
      {
        value: 103,
        label: 'Albacete',
      },
      {
        value: 104,
        label: 'Alicante',
      },
      {
        value: 105,
        label: 'Almeria',
      },
      {
        value: 106,
        label: 'Asturias',
      },
      {
        value: 107,
        label: 'Avila',
      },
      {
        value: 108,
        label: 'Badajoz',
      },
      {
        value: 109,
        label: 'Baleares',
      },
      {
        value: 110,
        label: 'Barcelona',
      },
      {
        value: 111,
        label: 'Burgos',
      },
      {
        value: 112,
        label: 'Caceres',
      },
      {
        value: 113,
        label: 'Cadiz',
      },
      {
        value: 114,
        label: 'Cantabria',
      },
      {
        value: 115,
        label: 'Castellon',
      },
      {
        value: 116,
        label: 'Ceuta',
      },
      {
        value: 117,
        label: 'Ciudad Real',
      },
      {
        value: 118,
        label: 'Cordoba',
      },
      {
        value: 119,
        label: 'Cuenca',
      },
      {
        value: 120,
        label: 'Girona',
      },
      {
        value: 121,
        label: 'Granada',
      },
      {
        value: 122,
        label: 'Guadalajara',
      },
      {
        value: 123,
        label: 'Guipuzcoa',
      },
      {
        value: 124,
        label: 'Huelva',
      },
      {
        value: 125,
        label: 'Huesca',
      },
      {
        value: 126,
        label: 'Jaen',
      },
      {
        value: 127,
        label: 'La Rioja',
      },
      {
        value: 128,
        label: 'Las Palmas',
      },
      {
        value: 129,
        label: 'Leon',
      },
      {
        value: 130,
        label: 'Lleida',
      },
      {
        value: 131,
        label: 'Lugo',
      },
      {
        value: 132,
        label: 'Madrid',
      },
      {
        value: 133,
        label: 'Malaga',
      },
      {
        value: 134,
        label: 'Melilla',
      },
      {
        value: 135,
        label: 'Murcia',
      },
      {
        value: 136,
        label: 'Navarra',
      },
      {
        value: 137,
        label: 'Ourense',
      },
      {
        value: 138,
        label: 'Palencia',
      },
      {
        value: 139,
        label: 'Pontevedra',
      },
      {
        value: 140,
        label: 'Salamanca',
      },
      {
        value: 141,
        label: 'Santa Cruz de Tenerife',
      },
      {
        value: 142,
        label: 'Segovia',
      },
      {
        value: 143,
        label: 'Sevilla',
      },
      {
        value: 144,
        label: 'Soria',
      },
      {
        value: 145,
        label: 'Tarragona',
      },
      {
        value: 146,
        label: 'Teruel',
      },
      {
        value: 147,
        label: 'Toledo',
      },
      {
        value: 148,
        label: 'Valencia',
      },
      {
        value: 149,
        label: 'Valladolid',
      },
      {
        value: 150,
        label: 'Vizcaya',
      },
      {
        value: 151,
        label: 'Zamora',
      },
      {
        value: 152,
        label: 'Zaragoza',
      },
      {
        value: 153,
        label: 'Aguascalientes',
      },
      {
        value: 154,
        label: 'Baja California',
      },
      {
        value: 155,
        label: 'Baja California Sur',
      },
      {
        value: 156,
        label: 'Campeche',
      },
      {
        value: 157,
        label: 'Chiapas',
      },
      {
        value: 158,
        label: 'Chihuahua',
      },
      {
        value: 159,
        label: 'Coahuila',
      },
      {
        value: 160,
        label: 'Colima',
      },
      {
        value: 161,
        label: 'Federal District',
      },
      {
        value: 162,
        label: 'Durango',
      },
      {
        value: 163,
        label: 'Guanajuato',
      },
      {
        value: 164,
        label: 'Guerrero',
      },
      {
        value: 165,
        label: 'Hidalgo',
      },
      {
        value: 166,
        label: 'Jalisco',
      },
      {
        value: 167,
        label: 'Mexico',
      },
      {
        value: 168,
        label: 'Michoacan',
      },
      {
        value: 169,
        label: 'Morelos',
      },
      {
        value: 170,
        label: 'Nayarit',
      },
      {
        value: 171,
        label: 'Nuevo Leon',
      },
      {
        value: 172,
        label: 'Oaxaca',
      },
      {
        value: 173,
        label: 'Puebla',
      },
      {
        value: 174,
        label: 'Queretaro',
      },
      {
        value: 175,
        label: 'Quintana Roo',
      },
      {
        value: 176,
        label: 'San Luis Potosi',
      },
      {
        value: 177,
        label: 'Sinaloa',
      },
      {
        value: 178,
        label: 'Sonora',
      },
      {
        value: 179,
        label: 'Tabasco',
      },
      {
        value: 180,
        label: 'Tamaulipas',
      },
      {
        value: 181,
        label: 'Tlaxcala',
      },
      {
        value: 182,
        label: 'Veracruz',
      },
      {
        value: 183,
        label: 'Yucatan',
      },
      {
        value: 184,
        label: 'Zacatecas',
      },
      {
        value: 185,
        label: 'Puerto Rico',
      },
      {
        value: 186,
        label: 'Virgin Islands',
      },
      {
        value: 187,
        label: '',
      },
      {
        value: 188,
        label: 'Test',
      },
      {
        value: 189,
        label: 'Mazowieckie',
      },
      {
        value: 190,
        label: 'New York',
      },
      {
        value: 191,
        label: 'South Cotabato',
      },
      {
        value: 192,
        label: 'Uttar Pradesh',
      },
      {
        value: 193,
        label: 'Vilnius',
      },
      {
        value: 194,
        label: 'Puerto Rico',
      },
      {
        value: 195,
        label: 'Ny',
      },
      {
        value: 196,
        label: 'Ny',
      },
      {
        value: 197,
        label: 'Andhra Pradesh',
      },
      {
        value: 198,
        label: 'Lagos',
      },
      {
        value: 199,
        label: 'Ca',
      },
      {
        value: 200,
        label: 'Maharashtra',
      },
      {
        value: 201,
        label: 'Ile De France',
      },
      {
        value: 202,
        label: 'Bronx County',
      },
      {
        value: 203,
        label: '2406 - C5/5',
      },
      {
        value: 204,
        label: 'New Delhi',
      },
      {
        value: 205,
        label: 'Gauteng',
      },
      {
        value: 206,
        label: 'Select',
      },
      {
        value: 207,
        label: 'Mp',
      },
      {
        value: 208,
        label: 'Missouri',
      },
      {
        value: 209,
        label: 'Texas',
      },
      {
        value: 210,
        label: 'Ill De France',
      },
      {
        value: 211,
        label: 'Delhi',
      },
      {
        value: 212,
        label: 'Iowa',
      },
      {
        value: 213,
        label: 'Kiambu',
      },
      {
        value: 214,
        label: 'İzmir',
      },
      {
        value: 215,
        label: 'Gujarat',
      },
      {
        value: 216,
        label: 'Otago',
      },
      {
        value: 217,
        label: 'Telangana',
      },
      {
        value: 218,
        label: 'Ny - New York',
      },
      {
        value: 219,
        label: 'Petersburg',
      },
      {
        value: 220,
        label: 'Brooklyn',
      },
      {
        value: 221,
        label: 'Indiana',
      },
      {
        value: 222,
        label: 'Tucuman',
      },
      {
        value: 223,
        label: 'New Jersey',
      },
      {
        value: 224,
        label: 'Tamilnadu',
      },
      {
        value: 225,
        label: 'Karnataka',
      },
      {
        value: 226,
        label: 'Bronx',
      },
      {
        value: 227,
        label: 'Centre Val De Loire',
      },
      {
        value: 228,
        label: 'Ankara',
      },
      {
        value: 229,
        label: 'Goteborg',
      },
      {
        value: 230,
        label: 'Goa',
      },
      {
        value: 231,
        label: 'Oxfordshire',
      },
      {
        value: 232,
        label: 'Madhya Pradesh',
      },
      {
        value: 233,
        label: 'Ar',
      },
      {
        value: 234,
        label: 'Rheinland-Pfalz',
      },
      {
        value: 235,
        label: 'Ny',
      },
      {
        value: 236,
        label: 'Tamil Nadu',
      },
      {
        value: 237,
        label: 'Sindh',
      },
      {
        value: 238,
        label: 'Colorado',
      },
      {
        value: 239,
        label: 'Selangor',
      },
      {
        value: 240,
        label: 'Tortola',
      },
      {
        value: 241,
        label: 'Tx',
      },
      {
        value: 242,
        label: 'Seville',
      },
      {
        value: 243,
        label: 'Nebraska',
      },
      {
        value: 244,
        label: 'Oh',
      },
      {
        value: 245,
        label: 'Mo',
      },
      {
        value: 246,
        label: 'Nj',
      },
      {
        value: 247,
        label: 'Dl',
      },
      {
        value: 248,
        label: 'Aleppo',
      },
      {
        value: 249,
        label: 'West Bengal',
      },
      {
        value: 250,
        label: 'California',
      },
      {
        value: 251,
        label: 'Kansas',
      },
      {
        value: 252,
        label: 'Kansas',
      },
      {
        value: 253,
        label: 'Wisconsin',
      },
      {
        value: 254,
        label: 'Ca',
      },
      {
        value: 255,
        label: 'Al',
      },
      {
        value: 256,
        label: 'Ma',
      },
      {
        value: 257,
        label: 'Florida',
      },
      {
        value: 258,
        label: 'Amman',
      },
      {
        value: 259,
        label: 'Pisa',
      },
      {
        value: 260,
        label: 'Rockaway Beach',
      },
      {
        value: 261,
        label: 'Pa',
      },
      {
        value: 262,
        label: 'Ohio',
      },
      {
        value: 263,
        label: 'Mhadya Pradesh',
      },
      {
        value: 264,
        label: 'Punjab',
      },
      {
        value: 265,
        label: 'Nantes',
      },
      {
        value: 266,
        label: 'Reykjavik',
      },
      {
        value: 267,
        label: 'New York City',
      },
      {
        value: 268,
        label: 'Islamabad / Rawalpinidi',
      },
      {
        value: 269,
        label: 'Savannah',
      },
      {
        value: 270,
        label: 'Missouri',
      },
      {
        value: 271,
        label: 'California',
      },
      {
        value: 272,
        label: 'Kentucky',
      },
      {
        value: 273,
        label: 'Indiana',
      },
      {
        value: 274,
        label: 'Pampanga',
      },
      {
        value: 275,
        label: 'Fl',
      },
      {
        value: 276,
        label: 'Co',
      },
      {
        value: 277,
        label: 'Sao Paulo',
      },
      {
        value: 278,
        label: 'Calgary',
      },
      {
        value: 279,
        label: 'Mi',
      },
      {
        value: 280,
        label: 'England',
      },
      {
        value: 281,
        label: 'Noord Holland',
      },
      {
        value: 282,
        label: 'Chennai',
      },
      {
        value: 283,
        label: 'In',
      },
      {
        value: 284,
        label: 'Cali Valle Del Cauca',
      },
      {
        value: 285,
        label: 'Valle Del Cauca',
      },
      {
        value: 286,
        label: 'Arkansas',
      },
      {
        value: 287,
        label: 'Oklahoma',
      },
      {
        value: 288,
        label: 'Parañaque City',
      },
      {
        value: 289,
        label: 'Michigan',
      },
      {
        value: 290,
        label: 'Ohio',
      },
      {
        value: 291,
        label: 'Manhattan',
      },
      {
        value: 292,
        label: 'No States Available',
      },
      {
        value: 293,
        label: 'Indiana',
      },
      {
        value: 294,
        label: 'Newyork',
      },
      {
        value: 295,
        label: 'Buenos Aires',
      },
      {
        value: 296,
        label: 'Dubai',
      },
      {
        value: 297,
        label: 'Abu Dhabi',
      },
      {
        value: 298,
        label: 'Dubai',
      },
      {
        value: 299,
        label: 'Ajman',
      },
      {
        value: 300,
        label: 'Beirut',
      },
      {
        value: 301,
        label: 'Cairo',
      },
      {
        value: 302,
        label: 'United Arab Emirates',
      },
      {
        value: 303,
        label: 'Silang',
      },
      {
        value: 304,
        label: 'Sharjah',
      },
      {
        value: 305,
        label: '0203',
      },
      {
        value: 306,
        label: 'Abudhabi',
      },
      {
        value: 307,
        label: 'Al Jizah',
      },
      {
        value: 308,
        label: 'Marina',
      },
      {
        value: 309,
        label: 'Dubayy [Dubai]',
      },
      {
        value: 310,
        label: 'Fes',
      },
      {
        value: 311,
        label: 'East Java',
      },
      {
        value: 312,
        label: 'Dubaidubai',
      },
      {
        value: 313,
        label: 'Al Bateen',
      },
      {
        value: 314,
        label: 'Abu Z¸aby [Abu Dhabi]',
      },
      {
        value: 315,
        label: 'Lebanon',
      },
      {
        value: 316,
        label: 'Aqaba',
      },
      {
        value: 317,
        label: 'C.a.b.a.',
      },
      {
        value: 318,
        label: 'Al Barsha',
      },
      {
        value: 319,
        label: 'Eastern Cape',
      },
      {
        value: 320,
        label: 'Metro Manila',
      },
      {
        value: 321,
        label: 'Western',
      },
      {
        value: 322,
        label: 'Satwa',
      },
      {
        value: 323,
        label: 'Ternopil',
      },
      {
        value: 324,
        label: 'Praslin, Grand Anse',
      },
      {
        value: 325,
        label: 'Yes',
      },
      {
        value: 326,
        label: 'Muscat',
      },
      {
        value: 327,
        label: '10',
      },
      {
        value: 328,
        label: 'Mle',
      },
      {
        value: 329,
        label: 'Dhaka Zila',
      },
      {
        value: 330,
        label: 'Johannesburg',
      },
      {
        value: 331,
        label: 'Keserouan',
      },
      {
        value: 332,
        label: 'Antwerpen',
      },
      {
        value: 333,
        label: 'Khyber Pakhtoon Khwa',
      },
      {
        value: 334,
        label: 'Texas',
      },
      {
        value: 335,
        label: 'Malopolskie',
      },
      {
        value: 336,
        label: 'Harare',
      },
      {
        value: 337,
        label: 'Olathe',
      },
      {
        value: 338,
        label: 'Marjan Island',
      },
      {
        value: 339,
        label: 'Dubay',
      },
      {
        value: 340,
        label: 'Id',
      },
      {
        value: 341,
        label: 'West Sussex',
      },
      {
        value: 342,
        label: 'Serbia',
      },
      {
        value: 343,
        label: 'Ok',
      },
      {
        value: 344,
        label: 'Visit Visa',
      },
      {
        value: 345,
        label: 'Ryad',
      },
      {
        value: 346,
        label: 'Dorset',
      },
      {
        value: 347,
        label: 'Yes',
      },
      {
        value: 348,
        label: 'Bali',
      },
      {
        value: 349,
        label: 'Vienna',
      },
      {
        value: 350,
        label: 'Liguria/ Savona',
      },
      {
        value: 351,
        label: 'Alabama',
      },
      {
        value: 352,
        label: 'Nebraska',
      },
      {
        value: 353,
        label: 'Louisiana',
      },
      {
        value: 354,
        label: 'Damascus',
      },
      {
        value: 355,
        label: 'Riyadh',
      },
      {
        value: 356,
        label: 'Africa',
      },
      {
        value: 357,
        label: 'Employment',
      },
      {
        value: 358,
        label: 'Brazoria',
      },
      {
        value: 359,
        label: 'Nyanza',
      },
      {
        value: 360,
        label: 'Wakiso',
      },
      {
        value: 361,
        label: 'Oklahoma',
      },
      {
        value: 362,
        label: 'Nairobi',
      },
      {
        value: 363,
        label: 'Wa',
      },
      {
        value: 364,
        label: 'Wi',
      },
      {
        value: 365,
        label: 'Deira',
      },
      {
        value: 366,
        label: 'Bulacan',
      },
      {
        value: 367,
        label: 'Ne',
      },
      {
        value: 368,
        label: 'U.a.e',
      },
      {
        value: 369,
        label: 'Yangon',
      },
      {
        value: 370,
        label: 'Ras Al Khaimah',
      },
      {
        value: 371,
        label: 'Sky Court',
      },
      {
        value: 372,
        label: 'Duabi',
      },
      {
        value: 373,
        label: 'Gandaki',
      },
      {
        value: 374,
        label: 'Abu Shaghara',
      },
      {
        value: 375,
        label: 'Kigali',
      },
      {
        value: 376,
        label: 'Bogotá',
      },
      {
        value: 377,
        label: 'Mount Lebanon',
      },
      {
        value: 378,
        label: 'Ciudad De México',
      },
      {
        value: 379,
        label: 'New Cairo',
      },
      {
        value: 380,
        label: 'Cankaya',
      },
      {
        value: 381,
        label: 'Alabama',
      },
      {
        value: 382,
        label: 'Surigao Del Sur',
      },
      {
        value: 383,
        label: 'Obour',
      },
      {
        value: 384,
        label: 'Mt Vernon',
      },
      {
        value: 385,
        label: 'New Providence',
      },
      {
        value: 386,
        label: 'Mo',
      },
      {
        value: 387,
        label: 'Keserwan',
      },
      {
        value: 388,
        label: 'Bucharest',
      },
      {
        value: 389,
        label: 'Taza',
      },
      {
        value: 390,
        label: 'Rome',
      },
      {
        value: 391,
        label: 'Lusaka',
      },
      {
        value: 392,
        label: 'Lisco',
      },
      {
        value: 393,
        label: 'Me',
      },
      {
        value: 394,
        label: 'Slovakia',
      },
      {
        value: 395,
        label: 'Moscow',
      },
      {
        value: 396,
        label: 'Batangas',
      },
      {
        value: 397,
        label: 'Iowa',
      },
      {
        value: 398,
        label: 'Washington',
      },
      {
        value: 399,
        label: 'Alaska',
      },
      {
        value: 400,
        label: 'Oregon',
      },
      {
        value: 401,
        label: "T'bilisi",
      },
      {
        value: 402,
        label: 'Surat Thani',
      },
      {
        value: 403,
        label: 'Veneto',
      },
      {
        value: 404,
        label: 'Kwazulu Natal',
      },
      {
        value: 405,
        label: 'Littoral',
      },
      {
        value: 406,
        label: 'State',
      },
      {
        value: 407,
        label: 'Ia',
      },
      {
        value: 408,
        label: 'Ny',
      },
      {
        value: 409,
        label: 'Giza',
      },
      {
        value: 410,
        label: 'Santo Domingo',
      },
      {
        value: 411,
        label: 'Mushin',
      },
      {
        value: 412,
        label: 'Cebu',
      },
      {
        value: 413,
        label: 'Mohonpur Habiganj Sadar',
      },
      {
        value: 414,
        label: 'Akron',
      },
      {
        value: 415,
        label: 'Select State',
      },
      {
        value: 416,
        label: 'Rift Valley',
      },
      {
        value: 417,
        label: 'Ky',
      },
      {
        value: 418,
        label: 'Or',
      },
      {
        value: 419,
        label: 'Bend',
      },
      {
        value: 420,
        label: 'Kosovo',
      },
      {
        value: 421,
        label: 'Kansas',
      },
      {
        value: 422,
        label: 'New Territories',
      },
      {
        value: 423,
        label: 'Coast',
      },
      {
        value: 424,
        label: 'Security Guard',
      },
      {
        value: 425,
        label: 'Georgia',
      },
      {
        value: 426,
        label: 'Kano',
      },
      {
        value: 427,
        label: 'West Java',
      },
      {
        value: 428,
        label: 'Idaho',
      },
      {
        value: 429,
        label: '1',
      },
      {
        value: 430,
        label: 'Rivers State',
      },
      {
        value: 431,
        label: 'Ca 92481',
      },
      {
        value: 432,
        label: 'Mn',
      },
      {
        value: 433,
        label: 'Texas',
      },
      {
        value: 434,
        label: 'Cal',
      },
      {
        value: 435,
        label: 'Na',
      },
      {
        value: 436,
        label: 'No',
      },
      {
        value: 437,
        label: 'Sucre',
      },
      {
        value: 438,
        label: 'Maryland',
      },
      {
        value: 439,
        label: 'Imo',
      },
      {
        value: 440,
        label: 'Kaduna',
      },
      {
        value: 441,
        label: 'Indiana',
      },
      {
        value: 442,
        label: 'Western',
      },
      {
        value: 443,
        label: '10023',
      },
      {
        value: 444,
        label: 'Marysville',
      },
      {
        value: 445,
        label: 'Mersin',
      },
      {
        value: 446,
        label: 'Tennessee',
      },
      {
        value: 447,
        label: 'Davao Del Norte',
      },
      {
        value: 448,
        label: 'Kansas',
      },
      {
        value: 449,
        label: 'Ga',
      },
      {
        value: 450,
        label: 'Alaska',
      },
      {
        value: 451,
        label: 'South West',
      },
      {
        value: 452,
        label: 'Ak',
      },
      {
        value: 453,
        label: 'Abidjan',
      },
      {
        value: 454,
        label: 'Western Cape',
      },
      {
        value: 455,
        label: 'Fort Wayne',
      },
      {
        value: 456,
        label: 'Maine',
      },
      {
        value: 457,
        label: 'Isfahan',
      },
      {
        value: 458,
        label: 'Ks',
      },
      {
        value: 459,
        label: 'Md',
      },
      {
        value: 460,
        label: 'Crestwood',
      },
      {
        value: 461,
        label: 'Milwaukee',
      },
      {
        value: 462,
        label: 'Asir',
      },
      {
        value: 463,
        label: 'Ashanti',
      },
      {
        value: 464,
        label: 'El Dorado Hills',
      },
      {
        value: 465,
        label: 'Bayshore',
      },
      {
        value: 466,
        label: 'Indiana',
      },
      {
        value: 467,
        label: 'İstanbul',
      },
      {
        value: 468,
        label: 'Sunsari',
      },
      {
        value: 469,
        label: 'Togo',
      },
      {
        value: 470,
        label: 'Emilia Romagna',
      },
      {
        value: 471,
        label: 'Mila',
      },
      {
        value: 472,
        label: 'Guam',
      },
      {
        value: 473,
        label: 'Oklahoma',
      },
      {
        value: 474,
        label: 'Muğla',
      },
      {
        value: 475,
        label: 'Indiana',
      },
      {
        value: 476,
        label: 'Makkah',
      },
      {
        value: 477,
        label: 'Camby',
      },
      {
        value: 478,
        label: 'New York',
      },
      {
        value: 479,
        label: 'Zagora',
      },
      {
        value: 480,
        label: 'Parma',
      },
      {
        value: 481,
        label: 'Nabatiyeh',
      },
      {
        value: 482,
        label: 'Pennsylvania',
      },
      {
        value: 483,
        label: 'Moberly',
      },
      {
        value: 484,
        label: 'Co',
      },
      {
        value: 485,
        label: 'Tashkent',
      },
      {
        value: 486,
        label: 'Albay',
      },
      {
        value: 487,
        label: 'Al Haram',
      },
      {
        value: 488,
        label: 'Western Province',
      },
      {
        value: 489,
        label: 'Samarkand',
      },
      {
        value: 490,
        label: 'Deddeh',
      },
      {
        value: 491,
        label: 'Ak',
      },
      {
        value: 492,
        label: 'Ohi',
      },
      {
        value: 493,
        label: 'Jamaica',
      },
      {
        value: 494,
        label: 'Manila City',
      },
      {
        value: 495,
        label: 'Diera',
      },
      {
        value: 496,
        label: 'Ohio',
      },
      {
        value: 497,
        label: 'La',
      },
      {
        value: 498,
        label: 'Cincinnati Ohio',
      },
      {
        value: 499,
        label: 'Hamilton',
      },
      {
        value: 500,
        label: 'Dakar',
      },
      {
        value: 501,
        label: 'Phil',
      },
      {
        value: 502,
        label: 'Or',
      },
      {
        value: 503,
        label: 'Ohio',
      },
      {
        value: 504,
        label: 'Queens',
      },
      {
        value: 505,
        label: 'Heliopolis',
      },
      {
        value: 506,
        label: 'N.y',
      },
      {
        value: 507,
        label: 'Dayton',
      },
      {
        value: 508,
        label: 'Mt',
      },
      {
        value: 509,
        label: 'Ar Rayyan',
      },
      {
        value: 510,
        label: 'Connecticut',
      },
      {
        value: 511,
        label: 'Jharkhand',
      },
      {
        value: 512,
        label: 'Tbilisi',
      },
      {
        value: 513,
        label: 'Dki Jakarta',
      },
      {
        value: 514,
        label: 'Bosnia And Herzegovina',
      },
      {
        value: 515,
        label: 'Delta',
      },
      {
        value: 516,
        label: 'Chattogram',
      },
      {
        value: 517,
        label: 'Al Qāhirah',
      },
      {
        value: 518,
        label: 'Az',
      },
      {
        value: 519,
        label: 'Sind',
      },
      {
        value: 520,
        label: 'Il',
      },
      {
        value: 521,
        label: 'Santarem',
      },
      {
        value: 522,
        label: 'Negros Oriental',
      },
      {
        value: 523,
        label: 'Chittagong',
      },
      {
        value: 524,
        label: 'Nd',
      },
      {
        value: 525,
        label: 'Tehran',
      },
      {
        value: 526,
        label: 'Central',
      },
      {
        value: 527,
        label: 'Doha',
      },
      {
        value: 528,
        label: 'New York Brooklyn',
      },
      {
        value: 529,
        label: 'Usa',
      },
      {
        value: 530,
        label: 'Montana',
      },
      {
        value: 531,
        label: 'Sumatera Utara',
      },
      {
        value: 532,
        label: 'Vt',
      },
      {
        value: 533,
        label: 'Ct',
      },
      {
        value: 534,
        label: 'Estado De México',
      },
      {
        value: 535,
        label: 'Ky',
      },
      {
        value: 536,
        label: 'North Carolina',
      },
      {
        value: 537,
        label: 'Phoenix',
      },
      {
        value: 538,
        label: 'Students',
      },
      {
        value: 539,
        label: 'Maten',
      },
      {
        value: 540,
        label: 'Mount-Lebanon',
      },
      {
        value: 541,
        label: 'Santa Fe',
      },
      {
        value: 542,
        label: 'Test',
      },
      {
        value: 543,
        label: 'Oregon / United States',
      },
      {
        value: 544,
        label: 'Pd',
      },
      {
        value: 545,
        label: 'Nv',
      },
      {
        value: 546,
        label: 'Vallenar Atacama',
      },
      {
        value: 547,
        label: 'Ia',
      },
      {
        value: 548,
        label: 'Vermont',
      },
      {
        value: 549,
        label: 'Sharkia',
      },
      {
        value: 550,
        label: 'Illinois',
      },
      {
        value: 551,
        label: 'America',
      },
      {
        value: 552,
        label: 'Oh',
      },
      {
        value: 553,
        label: 'Louisiana',
      },
      {
        value: 554,
        label: 'Guatemala',
      },
      {
        value: 555,
        label: 'La',
      },
      {
        value: 556,
        label: 'Agadir',
      },
      {
        value: 557,
        label: 'Geneve',
      },
      {
        value: 558,
        label: 'Haryana',
      },
      {
        value: 559,
        label: 'Bogota Dc',
      },
      {
        value: 560,
        label: 'Malawi',
      },
      {
        value: 561,
        label: 'Nh',
      },
      {
        value: 562,
        label: 'Western Province',
      },
      {
        value: 563,
        label: 'Nh',
      },
      {
        value: 564,
        label: 'Pittsburgh',
      },
      {
        value: 565,
        label: 'La Union',
      },
      {
        value: 566,
        label: 'Pays De La Loire',
      },
      {
        value: 567,
        label: 'Northern',
      },
      {
        value: 568,
        label: 'Gonaives',
      },
      {
        value: 569,
        label: 'Nebraska (Ne)',
      },
      {
        value: 570,
        label: 'Upper East',
      },
      {
        value: 571,
        label: 'Bucuresti',
      },
      {
        value: 572,
        label: 'Baden-Wuerttemberg',
      },
      {
        value: 573,
        label: 'Odessa',
      },
      {
        value: 574,
        label: 'Pakistan Punjab',
      },
      {
        value: 575,
        label: 'Iowa (Ia)',
      },
      {
        value: 576,
        label: 'Overland Park',
      },
      {
        value: 577,
        label: 'Washington',
      },
      {
        value: 578,
        label: 'Anchorage',
      },
      {
        value: 579,
        label: 'Kerala',
      },
      {
        value: 580,
        label: 'Elmatarya . Cairo',
      },
      {
        value: 581,
        label: 'North Lebanon',
      },
      {
        value: 582,
        label: 'Biskra',
      },
      {
        value: 583,
        label: 'Mexico City',
      },
      {
        value: 584,
        label: 'In - Indiana',
      },
      {
        value: 585,
        label: 'Sc',
      },
      {
        value: 586,
        label: 'Moses Lake',
      },
      {
        value: 587,
        label: 'Antioquia',
      },
      {
        value: 588,
        label: 'Wyoming',
      },
      {
        value: 589,
        label: 'Western',
      },
      {
        value: 590,
        label: 'Central',
      },
      {
        value: 591,
        label: 'Luanda',
      },
      {
        value: 592,
        label: 'Ohio',
      },
      {
        value: 593,
        label: 'Mount Orab',
      },
      {
        value: 594,
        label: 'Laguna',
      },
      {
        value: 595,
        label: 'Western Region',
      },
      {
        value: 596,
        label: 'Cross River State',
      },
      {
        value: 597,
        label: 'Prague',
      },
      {
        value: 598,
        label: 'Menofia',
      },
      {
        value: 599,
        label: 'Moshi',
      },
      {
        value: 600,
        label: 'Oyo',
      },
      {
        value: 601,
        label: 'Monroe County',
      },
      {
        value: 602,
        label: 'Oregone',
      },
      {
        value: 603,
        label: 'New York',
      },
      {
        value: 604,
        label: 'Littleton',
      },
      {
        value: 605,
        label: 'Springfield',
      },
      {
        value: 606,
        label: 'Salta',
      },
      {
        value: 607,
        label: 'Oh - Ohio',
      },
      {
        value: 608,
        label: 'Bengo',
      },
      {
        value: 609,
        label: 'Dakahlia',
      },
      {
        value: 610,
        label: 'Bamako',
      },
      {
        value: 611,
        label: 'Krc',
      },
      {
        value: 612,
        label: 'Illinois',
      },
      {
        value: 613,
        label: 'Rostov Oblast',
      },
      {
        value: 614,
        label: 'New Mexico',
      },
      {
        value: 615,
        label: 'Rhône',
      },
      {
        value: 616,
        label: 'Ny',
      },
      {
        value: 617,
        label: 'Port Louis',
      },
      {
        value: 618,
        label: 'Minsk Region',
      },
      {
        value: 619,
        label: '-',
      },
      {
        value: 620,
        label: 'Alramal',
      },
      {
        value: 621,
        label: 'Al-Remal',
      },
      {
        value: 622,
        label: 'Karu',
      },
      {
        value: 623,
        label: 'Lagos State',
      },
      {
        value: 624,
        label: 'Kurdistan',
      },
      {
        value: 625,
        label: 'Cdmx',
      },
      {
        value: 626,
        label: 'Center',
      },
      {
        value: 627,
        label: 'Abuja Capital Territory',
      },
      {
        value: 628,
        label: 'Ondo',
      },
      {
        value: 629,
        label: 'Region Metropolitana',
      },
      {
        value: 630,
        label: 'Kzn',
      },
      {
        value: 631,
        label: 'Ajara',
      },
      {
        value: 632,
        label: "Sana'a",
      },
      {
        value: 633,
        label: 'Hemayetpur',
      },
      {
        value: 634,
        label: 'Coimbra',
      },
      {
        value: 635,
        label: 'Ny',
      },
      {
        value: 636,
        label: 'Jordan - Amman',
      },
      {
        value: 637,
        label: 'Rajshahi',
      },
      {
        value: 638,
        label: 'Ocho Rios',
      },
      {
        value: 639,
        label: 'Dhaka',
      },
      {
        value: 640,
        label: 'Mb',
      },
      {
        value: 641,
        label: 'Milano',
      },
      {
        value: 642,
        label: 'Tx',
      },
      {
        value: 643,
        label: 'Lviv',
      },
      {
        value: 644,
        label: 'Indiana',
      },
      {
        value: 645,
        label: 'Ivanic Grad',
      },
      {
        value: 646,
        label: 'Leiria',
      },
      {
        value: 647,
        label: 'Greater Accra Region',
      },
      {
        value: 648,
        label: 'Louisiana',
      },
      {
        value: 649,
        label: 'Rwanda',
      },
      {
        value: 650,
        label: 'Nebraska',
      },
      {
        value: 651,
        label: 'Qasim',
      },
      {
        value: 652,
        label: 'Ny',
      },
      {
        value: 653,
        label: 'Bistrita Năsăud',
      },
      {
        value: 654,
        label: 'Louisiana',
      },
      {
        value: 655,
        label: 'Berlin',
      },
      {
        value: 656,
        label: 'Kentucky',
      },
      {
        value: 657,
        label: 'Saratov',
      },
      {
        value: 658,
        label: 'Ga',
      },
      {
        value: 659,
        label: 'Edo',
      },
      {
        value: 660,
        label: 'Georgetown',
      },
      {
        value: 661,
        label: 'California',
      },
      {
        value: 662,
        label: 'Kampala',
      },
      {
        value: 663,
        label: 'Central Region',
      },
      {
        value: 664,
        label: 'Khulna',
      },
      {
        value: 665,
        label: 'New Ireland',
      },
      {
        value: 666,
        label: 'Kocaeli',
      },
      {
        value: 667,
        label: 'Massachusetts',
      },
      {
        value: 668,
        label: 'Missouri',
      },
      {
        value: 669,
        label: 'Quezon',
      },
      {
        value: 670,
        label: 'Oriental',
      },
      {
        value: 671,
        label: '702-526-7286',
      },
      {
        value: 672,
        label: 'Northwest Region',
      },
      {
        value: 673,
        label: 'Fes Meknes',
      },
      {
        value: 674,
        label: 'Ústí Nad Labem',
      },
      {
        value: 675,
        label: 'Pa',
      },
      {
        value: 676,
        label: 'Anambra',
      },
      {
        value: 677,
        label: 'Singapore',
      },
      {
        value: 678,
        label: 'Panama',
      },
      {
        value: 679,
        label: 'Ny',
      },
      {
        value: 680,
        label: 'Yalova',
      },
      {
        value: 681,
        label: 'Maltepe',
      },
      {
        value: 682,
        label: 'Elbaradei',
      },
      {
        value: 683,
        label: 'Curazao',
      },
      {
        value: 684,
        label: 'Misamis Oriental',
      },
      {
        value: 685,
        label: 'Kartal',
      },
      {
        value: 686,
        label: 'Stockholm',
      },
      {
        value: 687,
        label: 'Other',
      },
      {
        value: 688,
        label: 'Ottawa',
      },
      {
        value: 689,
        label: 'California',
      },
      {
        value: 690,
        label: 'Accra Ghana',
      },
      {
        value: 691,
        label: 'Jessore',
      },
      {
        value: 692,
        label: 'Sher E Bangla Nagar',
      },
      {
        value: 693,
        label: 'Bangladesh',
      },
      {
        value: 694,
        label: 'Monrovia',
      },
      {
        value: 695,
        label: 'Medellin',
      },
      {
        value: 696,
        label: 'Sabaragamuwa',
      },
      {
        value: 697,
        label: 'Liban-Nord',
      },
      {
        value: 698,
        label: 'Copperbelt',
      },
      {
        value: 699,
        label: 'Pannipitiya',
      },
      {
        value: 700,
        label: 'Central',
      },
      {
        value: 701,
        label: 'Southland',
      },
      {
        value: 702,
        label: 'Nueva Ecija',
      },
      {
        value: 703,
        label: 'Newyork',
      },
      {
        value: 704,
        label: 'Zambales',
      },
      {
        value: 705,
        label: 'Surrey',
      },
      {
        value: 706,
        label: 'On - Ontario',
      },
      {
        value: 707,
        label: 'Bitola',
      },
      {
        value: 708,
        label: 'Ny',
      },
      {
        value: 709,
        label: 'Central Java',
      },
      {
        value: 710,
        label: 'Rajasthan',
      },
      {
        value: 711,
        label: 'Kwazulu-Natal',
      },
      {
        value: 712,
        label: 'San Jose',
      },
      {
        value: 713,
        label: 'Mo',
      },
      {
        value: 714,
        label: 'Serekunda Banjul',
      },
      {
        value: 715,
        label: 'Mpumalanga',
      },
      {
        value: 716,
        label: 'Rizal',
      },
      {
        value: 717,
        label: 'Missouri',
      },
      {
        value: 718,
        label: 'Naples',
      },
      {
        value: 719,
        label: 'Federal',
      },
      {
        value: 720,
        label: 'Dubai',
      },
    ],
  },
  {
    id: '20_5443_0_102_COUNTRY_DROP_DOWN',
    type: 'select',
    question: '<p>Select a country</p>',
    required: false,
    options: [
      {
        value: 1,
        label: 'United States',
      },
      {
        value: 2,
        label: 'Canada',
      },
      {
        value: 3,
        label: 'Afghanistan',
      },
      {
        value: 4,
        label: 'Antigua and Barbuda',
      },
      {
        value: 5,
        label: 'Anguilla',
      },
      {
        value: 6,
        label: 'Albania',
      },
      {
        value: 7,
        label: 'Armenia',
      },
      {
        value: 8,
        label: 'Angola',
      },
      {
        value: 9,
        label: 'Antarctica',
      },
      {
        value: 10,
        label: 'Argentina',
      },
      {
        value: 11,
        label: 'American Samoa',
      },
      {
        value: 12,
        label: 'Austria',
      },
      {
        value: 13,
        label: 'Australia',
      },
      {
        value: 14,
        label: 'Aruba',
      },
      {
        value: 15,
        label: 'Åland Islands',
      },
      {
        value: 16,
        label: 'Azerbaijan',
      },
      {
        value: 17,
        label: 'Bosnia and Herzegovina',
      },
      {
        value: 18,
        label: 'Barbados',
      },
      {
        value: 19,
        label: 'Bangladesh',
      },
      {
        value: 20,
        label: 'Belgium',
      },
      {
        value: 21,
        label: 'Burkina Faso',
      },
      {
        value: 22,
        label: 'Bulgaria',
      },
      {
        value: 23,
        label: 'Bahrain',
      },
      {
        value: 24,
        label: 'Burundi',
      },
      {
        value: 25,
        label: 'Benin',
      },
      {
        value: 26,
        label: 'Saint Barthélemy',
      },
      {
        value: 27,
        label: 'Bermuda',
      },
      {
        value: 28,
        label: 'Brunei Darussalam',
      },
      {
        value: 29,
        label: 'Bolivia',
      },
      {
        value: 30,
        label: 'Caribbean Netherlands ',
      },
      {
        value: 31,
        label: 'Brazil',
      },
      {
        value: 32,
        label: 'Bahamas',
      },
      {
        value: 33,
        label: 'Bhutan',
      },
      {
        value: 34,
        label: 'Bouvet Island',
      },
      {
        value: 35,
        label: 'Botswana',
      },
      {
        value: 36,
        label: 'Belarus',
      },
      {
        value: 37,
        label: 'Belize',
      },
      {
        value: 39,
        label: 'Cocos (Keeling) Islands',
      },
      {
        value: 40,
        label: 'Congo (Democratic Republic of)',
      },
      {
        value: 41,
        label: 'Central African Republic',
      },
      {
        value: 42,
        label: 'Congo',
      },
      {
        value: 43,
        label: 'Switzerland',
      },
      {
        value: 44,
        label: "Côte d'Ivoire",
      },
      {
        value: 45,
        label: 'Cook Islands',
      },
      {
        value: 46,
        label: 'Chile',
      },
      {
        value: 47,
        label: 'Cameroon',
      },
      {
        value: 48,
        label: 'China',
      },
      {
        value: 49,
        label: 'Colombia',
      },
      {
        value: 50,
        label: 'Costa Rica',
      },
      {
        value: 51,
        label: 'Cuba',
      },
      {
        value: 52,
        label: 'Cape Verde',
      },
      {
        value: 53,
        label: 'Curaçao',
      },
      {
        value: 54,
        label: 'Christmas Island',
      },
      {
        value: 55,
        label: 'Cyprus',
      },
      {
        value: 56,
        label: 'Czech Republic',
      },
      {
        value: 57,
        label: 'Germany',
      },
      {
        value: 58,
        label: 'Djibouti',
      },
      {
        value: 59,
        label: 'Denmark',
      },
      {
        value: 60,
        label: 'Dominica',
      },
      {
        value: 61,
        label: 'Dominican Republic',
      },
      {
        value: 62,
        label: 'Algeria',
      },
      {
        value: 63,
        label: 'Ecuador',
      },
      {
        value: 64,
        label: 'Estonia',
      },
      {
        value: 65,
        label: 'Egypt',
      },
      {
        value: 66,
        label: 'Western Sahara',
      },
      {
        value: 67,
        label: 'Eritrea',
      },
      {
        value: 68,
        label: 'Spain',
      },
      {
        value: 69,
        label: 'Ethiopia',
      },
      {
        value: 70,
        label: 'Finland',
      },
      {
        value: 71,
        label: 'Fiji',
      },
      {
        value: 72,
        label: 'Falkland Islands',
      },
      {
        value: 73,
        label: 'Micronesia (Federated States of)',
      },
      {
        value: 74,
        label: 'Faroe Islands',
      },
      {
        value: 75,
        label: 'France',
      },
      {
        value: 76,
        label: 'Gabon',
      },
      {
        value: 77,
        label: 'United Kingdom',
      },
      {
        value: 78,
        label: 'Grenada',
      },
      {
        value: 79,
        label: 'Georgia',
      },
      {
        value: 80,
        label: 'French Guiana',
      },
      {
        value: 81,
        label: 'Guernsey',
      },
      {
        value: 82,
        label: 'Ghana',
      },
      {
        value: 83,
        label: 'Gibraltar',
      },
      {
        value: 84,
        label: 'Greenland',
      },
      {
        value: 85,
        label: 'Gambia',
      },
      {
        value: 86,
        label: 'Guinea',
      },
      {
        value: 87,
        label: 'Guadeloupe',
      },
      {
        value: 88,
        label: 'Equatorial Guinea',
      },
      {
        value: 89,
        label: 'Greece',
      },
      {
        value: 90,
        label: 'South Georgia and the South Sandwich Islands',
      },
      {
        value: 91,
        label: 'Guatemala',
      },
      {
        value: 92,
        label: 'Guam',
      },
      {
        value: 93,
        label: 'Guinea-Bissau',
      },
      {
        value: 94,
        label: 'Guyana',
      },
      {
        value: 95,
        label: 'Hong Kong',
      },
      {
        value: 96,
        label: 'Heard and McDonald Islands',
      },
      {
        value: 97,
        label: 'Honduras',
      },
      {
        value: 98,
        label: 'Croatia',
      },
      {
        value: 99,
        label: 'Haiti',
      },
      {
        value: 100,
        label: 'Hungary',
      },
      {
        value: 101,
        label: 'Indonesia',
      },
      {
        value: 102,
        label: 'Ireland',
      },
      {
        value: 103,
        label: 'Israel',
      },
      {
        value: 104,
        label: 'Isle of Man',
      },
      {
        value: 105,
        label: 'India',
      },
      {
        value: 106,
        label: 'British Indian Ocean Territory',
      },
      {
        value: 107,
        label: 'Iraq',
      },
      {
        value: 108,
        label: 'Iran',
      },
      {
        value: 109,
        label: 'Iceland',
      },
      {
        value: 110,
        label: 'Italy',
      },
      {
        value: 111,
        label: 'Jersey',
      },
      {
        value: 112,
        label: 'Jamaica',
      },
      {
        value: 113,
        label: 'Jordan',
      },
      {
        value: 114,
        label: 'Japan',
      },
      {
        value: 115,
        label: 'Kenya',
      },
      {
        value: 116,
        label: 'Kyrgyzstan',
      },
      {
        value: 117,
        label: 'Cambodia',
      },
      {
        value: 118,
        label: 'Kiribati',
      },
      {
        value: 119,
        label: 'Comoros',
      },
      {
        value: 120,
        label: 'Saint Kitts and Nevis',
      },
      {
        value: 121,
        label: 'North Korea',
      },
      {
        value: 122,
        label: 'South Korea',
      },
      {
        value: 123,
        label: 'Kuwait',
      },
      {
        value: 124,
        label: 'Cayman Islands',
      },
      {
        value: 125,
        label: 'Kazakhstan',
      },
      {
        value: 126,
        label: "Lao People's Democratic Republic",
      },
      {
        value: 127,
        label: 'Lebanon',
      },
      {
        value: 128,
        label: 'Saint Lucia',
      },
      {
        value: 129,
        label: 'Liechtenstein',
      },
      {
        value: 130,
        label: 'Sri Lanka',
      },
      {
        value: 131,
        label: 'Liberia',
      },
      {
        value: 132,
        label: 'Lesotho',
      },
      {
        value: 133,
        label: 'Lithuania',
      },
      {
        value: 134,
        label: 'Luxembourg',
      },
      {
        value: 135,
        label: 'Latvia',
      },
      {
        value: 136,
        label: 'Libya',
      },
      {
        value: 137,
        label: 'Morocco',
      },
      {
        value: 138,
        label: 'Monaco',
      },
      {
        value: 139,
        label: 'Moldova',
      },
      {
        value: 140,
        label: 'Montenegro',
      },
      {
        value: 141,
        label: 'Saint-Martin (France)',
      },
      {
        value: 142,
        label: 'Madagascar',
      },
      {
        value: 143,
        label: 'Marshall Islands',
      },
      {
        value: 144,
        label: 'Macedonia',
      },
      {
        value: 145,
        label: 'Mali',
      },
      {
        value: 146,
        label: 'Myanmar',
      },
      {
        value: 147,
        label: 'Mongolia',
      },
      {
        value: 148,
        label: 'Macau',
      },
      {
        value: 149,
        label: 'Northern Mariana Islands',
      },
      {
        value: 150,
        label: 'Martinique',
      },
      {
        value: 151,
        label: 'Mauritania',
      },
      {
        value: 152,
        label: 'Montserrat',
      },
      {
        value: 153,
        label: 'Malta',
      },
      {
        value: 154,
        label: 'Mauritius',
      },
      {
        value: 155,
        label: 'Maldives',
      },
      {
        value: 156,
        label: 'Malawi',
      },
      {
        value: 157,
        label: 'Mexico',
      },
      {
        value: 158,
        label: 'Malaysia',
      },
      {
        value: 159,
        label: 'Mozambique',
      },
      {
        value: 160,
        label: 'Namibia',
      },
      {
        value: 161,
        label: 'New Caledonia',
      },
      {
        value: 162,
        label: 'Niger',
      },
      {
        value: 163,
        label: 'Norfolk Island',
      },
      {
        value: 164,
        label: 'Nigeria',
      },
      {
        value: 165,
        label: 'Nicaragua',
      },
      {
        value: 166,
        label: 'The Netherlands',
      },
      {
        value: 167,
        label: 'Norway',
      },
      {
        value: 168,
        label: 'Nepal',
      },
      {
        value: 169,
        label: 'Nauru',
      },
      {
        value: 170,
        label: 'Niue',
      },
      {
        value: 171,
        label: 'New Zealand',
      },
      {
        value: 172,
        label: 'Oman',
      },
      {
        value: 173,
        label: 'Panama',
      },
      {
        value: 174,
        label: 'Peru',
      },
      {
        value: 175,
        label: 'French Polynesia',
      },
      {
        value: 176,
        label: 'Papua New Guinea',
      },
      {
        value: 177,
        label: 'Philippines',
      },
      {
        value: 178,
        label: 'Pakistan',
      },
      {
        value: 179,
        label: 'Poland',
      },
      {
        value: 180,
        label: 'St. Pierre and Miquelon',
      },
      {
        value: 181,
        label: 'Pitcairn',
      },
      {
        value: 182,
        label: 'Puerto Rico',
      },
      {
        value: 183,
        label: 'Palestine, State of',
      },
      {
        value: 184,
        label: 'Portugal',
      },
      {
        value: 185,
        label: 'Palau',
      },
      {
        value: 186,
        label: 'Paraguay',
      },
      {
        value: 187,
        label: 'Qatar',
      },
      {
        value: 188,
        label: 'Réunion',
      },
      {
        value: 189,
        label: 'Romania',
      },
      {
        value: 190,
        label: 'Serbia',
      },
      {
        value: 191,
        label: 'Russian Federation',
      },
      {
        value: 192,
        label: 'Rwanda',
      },
      {
        value: 193,
        label: 'Saudi Arabia',
      },
      {
        value: 194,
        label: 'Solomon Islands',
      },
      {
        value: 195,
        label: 'Seychelles',
      },
      {
        value: 196,
        label: 'Sudan',
      },
      {
        value: 197,
        label: 'Sweden',
      },
      {
        value: 198,
        label: 'Singapore',
      },
      {
        value: 199,
        label: 'Saint Helena',
      },
      {
        value: 200,
        label: 'Slovenia',
      },
      {
        value: 201,
        label: 'Svalbard and Jan Mayen Islands',
      },
      {
        value: 202,
        label: 'Slovakia',
      },
      {
        value: 203,
        label: 'Sierra Leone',
      },
      {
        value: 204,
        label: 'San Marino',
      },
      {
        value: 205,
        label: 'Senegal',
      },
      {
        value: 206,
        label: 'Somalia',
      },
      {
        value: 207,
        label: 'Suriname',
      },
      {
        value: 208,
        label: 'South Sudan',
      },
      {
        value: 209,
        label: 'Sao Tome and Principe',
      },
      {
        value: 210,
        label: 'El Salvador',
      },
      {
        value: 211,
        label: 'Sint Maarten (Dutch part)',
      },
      {
        value: 212,
        label: 'Syria',
      },
      {
        value: 213,
        label: 'Swaziland',
      },
      {
        value: 214,
        label: 'Turks and Caicos Islands',
      },
      {
        value: 215,
        label: 'Chad',
      },
      {
        value: 216,
        label: 'French Southern Territories',
      },
      {
        value: 217,
        label: 'Togo',
      },
      {
        value: 218,
        label: 'Thailand',
      },
      {
        value: 219,
        label: 'Tajikistan',
      },
      {
        value: 220,
        label: 'Tokelau',
      },
      {
        value: 221,
        label: 'Timor-Leste',
      },
      {
        value: 222,
        label: 'Turkmenistan',
      },
      {
        value: 223,
        label: 'Tunisia',
      },
      {
        value: 224,
        label: 'Tonga',
      },
      {
        value: 225,
        label: 'Turkey',
      },
      {
        value: 226,
        label: 'Trinidad and Tobago',
      },
      {
        value: 227,
        label: 'Tuvalu',
      },
      {
        value: 228,
        label: 'Taiwan',
      },
      {
        value: 229,
        label: 'Tanzania',
      },
      {
        value: 230,
        label: 'Ukraine',
      },
      {
        value: 231,
        label: 'Uganda',
      },
      {
        value: 232,
        label: 'United States Minor Outlying Islands',
      },
      {
        value: 234,
        label: 'Uruguay',
      },
      {
        value: 235,
        label: 'Uzbekistan',
      },
      {
        value: 236,
        label: 'Vatican',
      },
      {
        value: 237,
        label: 'Saint Vincent and the Grenadin',
      },
      {
        value: 238,
        label: 'Venezuela',
      },
      {
        value: 239,
        label: 'Virgin Islands (British)',
      },
      {
        value: 240,
        label: 'Virgin Islands (U.S.)',
      },
      {
        value: 241,
        label: 'Vietnam',
      },
      {
        value: 242,
        label: 'Vanuatu',
      },
      {
        value: 243,
        label: 'Wallis and Futuna Islands',
      },
      {
        value: 244,
        label: 'Samoa',
      },
      {
        value: 245,
        label: 'Yemen',
      },
      {
        value: 246,
        label: 'Mayotte',
      },
      {
        value: 247,
        label: 'South Africa',
      },
      {
        value: 248,
        label: 'Zambia',
      },
      {
        value: 249,
        label: 'Zimbabwe',
      },
      {
        value: 250,
        label: 'Not Provided',
      },
      {
        value: 251,
        label: 'United Arab Emirates',
      },
      {
        value: 252,
        label: 'Andorra',
      },
    ],
  },
  {
    id: '20_5440_0_102_SELECT_DATE_2',
    type: 'date',
    question: '<p>Select a date here</p>',
    required: false,
    format: 'MM/dd/yyyy',
  },
  {
    id: '20_5441_0_102_A_SCALE',
    type: 'select',
    question: '<p>Select a value</p>',
    required: false,
    options: [
      {
        value: 16055,
        label: '1 = Strongly Disagree',
      },
      {
        value: 16056,
        label: '2 = Disagree',
      },
      {
        value: 16057,
        label: '3 = Neither',
      },
      {
        value: 16058,
        label: '4 = Agree',
      },
      {
        value: 16059,
        label: '5 = Strongly Agree',
      },
    ],
  },
  {
    id: 'Applicant Statement_open',
    type: 'pagebreak',
  },
  {
    id: 'Applicant Statement',
    type: 'information',
    text: '<p>I declare that all statements and answers in this application are true and complete and agree that any untrue or misleading answer,  I give this employer the permission to validate some of my answers with the appropriate authorities/institutions.<br></p>\n<p>I authorize this employer or its agents to investigate my references, to review my former employment record and to keep and preserve records of such investigations. Additionally, I release all parties from liability for any damage that may result from furnishing information to this employer or its agents.&nbsp;</p>\n',
    fontsize: 8,
  },
  {
    id: '17_105_0_APPLICANT_AGREEMENT_SIGNATURE',
    type: 'text',
    question: 'Electronic Signature (type your name):',
    required: true,
  },
  {
    id: '17_106_0_APPLICANT_AGREEMENT_DATE',
    type: 'date',
    question: 'Date:',
    required: true,
    format: 'MM/dd/yyyy',
  },
];

const selectFirstOption = [
  {
    label: '-- select an option --',
    value: '',
    disabled: true,
  },
];

export { firstPageData, testQuestion, testFullQuestion, selectFirstOption };
