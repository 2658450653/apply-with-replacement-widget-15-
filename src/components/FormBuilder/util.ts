import { IQuestionMeta } from '../../api/types';

// strips out HTML tags from string such as <p></p>
// and also if the string is wrapped in single quotes
const stripHTMLTags = (rawString: string) => {
  const noSingleQuotes = (str: string) => {
    if (str.charAt(0) === "'" && str.charAt(rawString.length - 1) === "'") {
      return str.substring(1, str.length - 1);
    }
    return str;
  };

  const tmp = document.createElement('div');
  tmp.innerHTML = noSingleQuotes(rawString);
  return tmp.textContent;
};

// steps through the questionMeta obj and makes sure
// that strings are pure strings only
const sanitizeQuestionMeta = (obj: IQuestionMeta) =>
  Object.entries(obj).reduce(
    (item, [key, value]) => ({ ...item, [key]: typeof value === 'string' ? stripHTMLTags(value) : value }),
    {},
  );

// returns a multi-dimensional array of questions for the form
const buildQuestionArray = (questions: IQuestionMeta[]): IQuestionMeta[][] => {
  const finalArray = [];
  let innerArray = [];

  questions.forEach(elm => {
    if (elm.type === 'pagebreak') {
      finalArray.push(innerArray);
      innerArray = [];
    } else {
      innerArray.push(sanitizeQuestionMeta(elm));
    }
  });

  // for single page questions
  if (innerArray.length > 0) finalArray.push(innerArray);

  // filter out empty array due to pagebreak
  return finalArray.filter(elm => elm.length > 0);
};

const buildParsleyAttributes = ({ limit, required }: Partial<IQuestionMeta>) => {
  let limitAttrs = {};
  let requiredAttrs = {};

  if (required) {
    requiredAttrs = {
      'data-parsley-required': 'true',
      'data-parsley-trigger': 'focusout',
      'data-parsley-required-message': 'this question is required',
    };
  }

  if (limit > 0) {
    limitAttrs = {
      'maxLength': limit,
      'data-parsley-maxlength': limit,
    };
  }

  return { ...limitAttrs, ...requiredAttrs };
};

export { buildQuestionArray, sanitizeQuestionMeta, buildParsleyAttributes, stripHTMLTags };
