import sdk from '@api/virustotal';

sdk.postFiles()
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));