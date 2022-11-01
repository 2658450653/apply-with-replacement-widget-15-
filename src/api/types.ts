import { AxiosRequestHeaders } from 'axios';

interface myAxiosRequestHeaders extends AxiosRequestHeaders {
  'yzabc-logincredential'?: boolean;
  'Access-Control-Allow-Origin'?: string;
  // 'cache'?: boolean;
}
interface IHierarchicalOptions {
  condition: { id: string; value: string };
  id: string;
  options: IOptions[];
}

interface IOptions {
  label: string;
  value: number | string;
  disabled?: boolean;
}

interface IQuestionMeta {
  fontsize?: number;
  format?: 'MM/dd/yyyy' | 'MM/yyyy' | 'decimal' | 'numeric_text';
  hierarchicalOptions?: IHierarchicalOptions[];
  id: string;
  limit?: number;
  question?: string;
  options?: IOptions[] | null;
  required?: boolean;
  storeType?: 'answers' | 'applicant';
  text?: string;
  type: string;
  min?: number | string;
  max?: number | string;
}

interface IApplicantMeta {
  coverletter?: string;
  email?: string;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  phoneNumber?: string;
}

interface IAnswersMeta {
  id: string;
  value: string | number;
}

interface ISubmitData {
  job: {
    jobId: number;
    mediaId: number;
  };

  applicant: IApplicantMeta;
  questions: {
    answers: IAnswersMeta[];
    questions: IQuestionMeta[];
  };
  analytics: {
    ip: string;
    userAgent: string;
  };
  locale: string;
}

interface IGetWidgetInfoReturn {
  error?: string;
  questions: IQuestionMeta[];
}

interface IPostSubmitReturn {
  error?: string;
  message?: string;
}

interface IFormStyle {
  primaryColor?: string; //: '#2f86dd',//#2f86dd
  secondaryColor?: string; //: '#184673',//'#184673',
  primaryFontColor?: string; //'#343A40',
  fontFamily?: string; // 'Poppins,sans-serif',
  secondaryFontColor?: string;
}

export type {
  IOptions,
  IGetWidgetInfoReturn,
  IQuestionMeta,
  IPostSubmitReturn,
  ISubmitData,
  IFormStyle,
  IAnswersMeta,
  myAxiosRequestHeaders,
};
