const blobToDataURL = async (blob: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = ({ target }) => {
      resolve(target.result);
    };

    reader.onerror = error => {
      reject(error);
    };

    reader.readAsDataURL(blob);
  });
};

const getNamesFromFileList = (filelist: FileList) =>
  Array.from(filelist)
    .map(({ name }) => name)
    .join(',');

export { blobToDataURL, getNamesFromFileList };
