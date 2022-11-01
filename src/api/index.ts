import axios from 'axios';
import { IGetWidgetInfoReturn, IPostSubmitReturn, myAxiosRequestHeaders } from './types';

// dev-mock:
// const process = {
//   env: {
//     WIDGET_API: 'https://www.fastmock.site/mock/61db95ad9c4724b80e6093bce810db37/demo/applyform',
//   },
// };

// example of how to interact with the widget api
const getWidgetInfo = async (jobId: string): Promise<IGetWidgetInfoReturn> => {
  try {
    console.log(`${process.env.WIDGET_API}?job_id=${jobId}`)
    const { data } = await axios(`${process.env.WIDGET_API}?job_id=${jobId}`);
    return { questions: data };
  } catch (error) {
    return { error: error.message, questions: [] };
  }
};

const headers: myAxiosRequestHeaders = {
  'yzabc-logincredential': true,
  'Access-Control-Allow-Origin': '*',
  'cache': false,
  'contentType': 'application/json',
};

const submitFormInfo = async (formData: any): Promise<IPostSubmitReturn> => {
  try {
    const { data } = await axios.post(`${process.env.WIDGET_API}/api/job`, formData, { headers });
    return { message: data };
  } catch (error) {
    return { error: error.message };
  }
};

export { getWidgetInfo, submitFormInfo };
