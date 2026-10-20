# New Generation High School Student Portal

A single-page student portal built with Next.js 16, TypeScript, and Tailwind CSS. The portal will let school staff view student statistics, search the student list, inspect student details, add students, remove students, and clear the list.

## Team

| Member | Responsibilities |
| --- | --- |
| Paulo Massao | To be confirmed |
| Team member | To be confirmed |

## Project setup

Requirements:

- Node.js LTS
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npm run dev
npm run lint
npm run build
```

## Collaboration workflow

1. Pull the latest `main` branch before starting work.
2. Create a branch for one focused task, such as `feature/student-card`.
3. Commit only the files you worked on, using a clear message that says what changed.
4. Push the branch and open a pull request.
5. Review and test the pull request before merging it into `main`.

Each team member should make at least three meaningful commits from their own GitHub account, as required by the assignment rubric.

## Deployment

Vercel URL: To be added

## Test checklist

Complete this table after testing the finished app in a browser.

| # | Test | Expected result | Status |
| --- | --- | --- | --- |
| 1 | Open the app. | Every student from the data file appears, and all three statistics match the data. | Not tested |
| 2 | Open and close one student's details. | Only that card shows the average and optional Honour roll badge; the button changes between Show details and Hide details. | Not tested |
| 3 | Remove a grade 12 student. | The student disappears, and Students and Graduating both decrease by one. | Not tested |
| 4 | Search for a last name using capital letters, then clear the search. | The matching student appears regardless of letter case; clearing the search restores the complete list. | Not tested |
| 5 | Search for `zzz`. | The no-students message appears, while the three statistics remain unchanged. | Not tested |
| 6 | Leave the first name empty and try to add a student. | No student is added. | Not tested |
| 7 | Complete all four inputs and add a student. | The student and updated statistics appear; the names clear, grade resets to 9, and average resets to 70. | Not tested |
| 8 | Select Clear all. | The no-students message appears, and all three statistics become 0. | Not tested |
| 9 | View the app at phone width. | Cards stack in one column with no horizontal scrolling. | Not tested |
| 10 | Select every navbar link. | The page jumps to the corresponding section. | Not tested |
