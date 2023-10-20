function generateRandomDate() {
  const start = new Date(2023, 0, 1); // January 1, 2023
  const end = new Date(2023, 11, 31); // December 31, 2023
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return `${
    randomDate.getMonth() + 1
  }/${randomDate.getDate()}/${randomDate.getFullYear()}`;
}

const tableData = [
  {
    Name: "Eureka",
    Head: "@anthony",
    Contributors: "Nana",
    Start: "11/02/23",
    Deadline: "10/11/23",
  },
];

// Generate 20 more objects with random data
for (let i = 0; i < 20; i++) {
  const randomName = `Project ${i + 1}`;
  const randomHead = `@user${i + 1}`;
  const randomContributor = `Contributor ${i + 1}`;
  const randomStartDate = generateRandomDate();
  const randomDeadline = generateRandomDate();

  tableData.push({
    Name: randomName,
    Head: randomHead,
    Contributors: randomContributor,
    Start: randomStartDate,
    Deadline: randomDeadline,
  });
}

export default tableData;
