export const createIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId++;
    return lastGenerateId;
  };
};

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export const checkLengthString = (input, maxLength) => input.length <= maxLength;

export const isPalindrome = (input) => {
  const string = input.toLowerCase().replaceAll(' ', '');
  const reverseString = string.split('').reverse().join('');
  return string === reverseString;
};

export const extractNumbers = (input) => {
  const string = input.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = string.at(i);
    if (!isNaN(parseInt(char, 10))) {
      result += char;
    }
  }
  return result ? +result : NaN;
};

export const parsingTimeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export const isMeetingIntoWork = (startWork, endWork, startMeeting, durationMeeting) => {
  const startWorkMinutes = parsingTimeToMinutes(startWork);
  const endWorkMinutes = parsingTimeToMinutes(endWork);

  const startMeetingMinutes = parsingTimeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + durationMeeting;

  return startWorkMinutes <= startMeetingMinutes && endMeetingMinutes <= endWorkMinutes;
};
