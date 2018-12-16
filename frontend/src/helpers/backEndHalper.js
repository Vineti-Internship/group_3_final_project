import {dataLoader} from "../services/apiService";

export const getGradesForSection = async () => {
  const result = [];

  const currentTeacherSectionId = JSON.parse(window.localStorage.getItem('user')).section.id;
  const allStudents = await dataLoader('students', 'GET');

  for (let i = 0; i < allStudents.length; i++) {
    let sections = allStudents[i].sections;
    for (let j = 0; j < sections.length; j++) {
      if (sections[j].id === currentTeacherSectionId) {
        if(allStudents[i].grades)
        result.push({grade : allStudents[i].grades[j], studentId: allStudents[i].id});
      }
    }
  }

  return result;
};