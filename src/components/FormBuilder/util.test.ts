import { buildQuestionArray, sanitizeQuestionMeta, stripHTMLTags } from './util';

describe('buildQuestionArray', () => {
  it('returns a multidimensional array when passing in a QuestionMeta object', () => {
    const assert = buildQuestionArray([
      { id: '1', type: 'text', question: '<p>this is the question</p>' },
      { id: '2', type: 'text', text: '<div>this is some text</div>' },
    ]);

    expect(Array.isArray(assert)).toBe(true);
    expect(Array.isArray(assert[0])).toBe(true);
  });

  it('doesnt include an empty pagebreak array if one is passed in first', () => {
    const assert = buildQuestionArray([
      { id: '1', type: 'pagebreak' },
      { id: '2', type: 'text', question: '<p>this is the question</p>' },
      { id: '3', type: 'text', text: '<div>this is some text</div>' },
    ]);

    expect(assert[0][0].type).toBe('text');
    expect(assert[0][0].question).toBe('this is the question');
  });

  it('contains as many sub arrays as there are pagebreak type questions', () => {
    const assert = buildQuestionArray([
      { id: '1', type: 'text', question: '<p>this is the question</p>' },
      { id: '2', type: 'text', text: '<div>this is some text</div>' },
      { id: '3', type: 'pagebreak' },
      { id: '4', type: 'text', question: '<p>this is another question</p>' },
      { id: '5', type: 'text', text: '<div>this is some other text</div>' },
      { id: '6', type: 'pagebreak' },
    ]);

    // 2 'pages' of questions
    expect(assert).toHaveLength(2);

    // first 'page' of questions
    expect(assert[0][0].id).toBe('1');

    // second 'page' of questions
    expect(assert[1][0].id).toBe('4');
  });
});

describe('sanitizeQuestionMeta', () => {
  it('returns the object passed in but with stripped out HTML tags', () => {
    const assert1 = sanitizeQuestionMeta({ id: '1', type: 'text', question: '<p>this is the question</p>' });
    const assert2 = sanitizeQuestionMeta({ id: '2', type: 'text', text: '<div>this is some text</div>' });

    expect(assert1).toStrictEqual({ id: '1', type: 'text', question: 'this is the question' });
    expect(assert2).toStrictEqual({ id: '2', type: 'text', text: 'this is some text' });
  });
});

describe('stripHTMLTags', () => {
  it('returns a string without any HTML tags', () => {
    const assert1 = stripHTMLTags('<p>this is some text</p>');
    const assert2 = stripHTMLTags('<div><p>this is <strong>cool</strong> man</div>');

    expect(assert1).toBe('this is some text');
    expect(assert2).toBe('this is cool man');
  });

  it('returns a string without extra single quote tags', () => {
    const assert = stripHTMLTags("'this should not contain single quotes'");

    expect(assert).toBe('this should not contain single quotes');
  });
});
