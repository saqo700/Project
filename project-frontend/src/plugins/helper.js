export function savePerson(arg) {
  let records = [];
  records.push(arg);
  localStorage.setItem('record', JSON.stringify(this.records));
}
