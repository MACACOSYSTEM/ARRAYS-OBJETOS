let radiologia = [
	{
	  hora: "11:00",
	  especialista: "IGNACIO SCHULZ",
	  paciente: "FRANCISCA ROJAS",
	  rut: "9878782-1",
	  prevision: "FONASA",
	},
	{
	  hora: "11:30",
	  especialista: "FEDERICO SUBERCASEAUX",
	  paciente: "PAMELA ESTRADA",
	  rut: "15345241-3",
	  prevision: "ISAPRE",
	},
	{
	  hora: "15:00",
	  especialista: "FERNANDO WURTHZ",
	  paciente: "ARMANDO LUNA",
	  rut: "16445345-9",
	  prevision: "ISAPRE",
	},
	{
	  hora: "15:30",
	  especialista: "ANA MARIA GODOY",
	  paciente: "MANUEL GODOY",
	  rut: "17666419-0",
	  prevision: "FONASA",
	},
	{
	  hora: "16:00",
	  especialista: "PATRICIA SUAZO",
	  paciente: "RAMON ULLOA",
	  rut: "14989389-K",
	  prevision: "FONASA",
	},
  ];
  let traumatologia = [
	{
	  hora: "08:00",
	  especialista: "MARIA PAZ ALTUZARRA",
	  paciente: "PAULA SANCHEZ",
	  rut: "15554774-5",
	  prevision: "FONASA",
	},
	{
	  hora: "10:00",
	  especialista: "RAUL ARAYA",
	  paciente: "ANGELICA NAVAS",
	  rut: "15444147-9",
	  prevision: "ISAPRE",
	},
	{
	  hora: "10:30",
	  especialista: "MARIA ARRIAGADA",
	  paciente: "ANA KLAPP",
	  rut: "17879423-9",
	  prevision: "ISAPRE",
	},
	{
	  hora: "11:00",
	  especialista: "ALEJANDRO BADILLA",
	  paciente: "FELIPE MARDONES",
	  rut: "1547423-6",
	  prevision: "ISAPRE",
	},
	{
	  hora: "11:30",
	  especialista: "CECILIA BUDNIK",
	  paciente: "DIEGO MARRE",
	  rut: "16554741-K",
	  prevision: "FONASA",
	},
	{
	  hora: "12:00",
	  especialista: "ARTURO CAVAGNARO",
	  paciente: "CECILIA MENDEZ",
	  rut: "9747535-8",
	  prevision: "ISAPRE",
	},
	{
	  hora: "12:30",
	  especialista: "ANDRES KANACRI",
	  paciente: "MARCIAL SUAZO",
	  rut: "11254785-5",
	  prevision: "ISAPRE",
	},
  ];
  let dental = [
	{
	  hora: "08:30",
	  especialista: "ANDREA ZUNIGA",
	  paciente: "MARCELA RETAMAL",
	  rut: "11123425-6",
	  prevision: "ISAPRE",
	},
	{
	  hora: "11:00",
	  especialista: "MARIA PIA ZANARTU",
	  paciente: "ANGEL MUNOZ",
	  rut: "9878789-2",
	  prevision: "ISAPRE",
	},
	{
	  hora: "11:30",
	  especialista: "SCARLETT WITTING",
	  paciente: "MARIO KAST",
	  rut: "7998789-5",
	  prevision: "FONASA",
	},
	{
	  hora: "13:00",
	  especialista: "FRANCISCO VON TEUBER",
	  paciente: "KARIN FERNANDEZ",
	  rut: "18887662-K",
	  prevision: "FONASA",
	},
	{
	  hora: "13:30",
	  especialista: "EDUARDO VINUELA",
	  paciente: "HUGO SANCHEZ",
	  rut: "17665461-4",
	  prevision: "FONASA",
	},
	{
	  hora: "14:00",
	  especialista: "RAQUEL VILLASECA",
	  paciente: "ANA SEPULVEDA",
	  rut: "14441281-0",
	  prevision: "ISAPRE",
	},
  ];
  function patientAttendanceInformation(arrayPos, htmlTarget) {
	document.getElementById(
	  `patient_attendance_information_${htmlTarget}`
	).innerHTML = `Primera Atención: ${arrayPos[0].paciente} - Previsión: ${
	  arrayPos[0].prevision
	} | Última Atención: ${arrayPos[arrayPos.length - 1].paciente} - Previsión: ${
	  arrayPos[arrayPos.length - 1].prevision
	}`;
  }
  patientAttendanceInformation(radiologia, "radiology");
  patientAttendanceInformation(traumatologia, "traumatology");
  patientAttendanceInformation(dental, "dental");
  
function tablePatientInformationGenerator(arrayPos, htmlTarget) {
	let genericHeaderText = `<tr>
	<th>HORA</th>
	<th>ESPECIALISTA</th>
	<th>PACIENTE</th>
	<th>RUT</th>
	<th>PREVISION</th>
	</tr>`;
  
	for (let i = 0; i < arrayPos.length; i++) {
	  genericHeaderText += `<tr>
		<td>${arrayPos[i].hora}</td>
		<td>${arrayPos[i].especialista}</td>
		<td>${arrayPos[i].paciente}</td>
		<td>${arrayPos[i].rut}</td>
		<td>${arrayPos[i].prevision}</td>
		</tr>`;
	}
	document.getElementById(`table_patient_information_${htmlTarget}`).innerHTML =
	  genericHeaderText;
  }
  
  
  function addPatient(array, time, specialist, patient, rut, prevision) {
	array.push({
	  hora: `${time}`,
	  especialista: `${specialist}`,
	  paciente: `${patient}`,
	  rut: `${rut}`,
	  prevision: `${prevision}`,
	});
  }
  addPatient(
	traumatologia,
	"09:00",
	"RENE POBLETE",
	"ANA GELLONA",
	"13123329-7",
	"ISAPRE"
  );
  addPatient(
	traumatologia,
	"09:30",
	"MARIA SOLAR",
	"RAMIRO ANDRADE",
	"12221451-K",
	"FONASA"
  );
  addPatient(
	traumatologia,
	"10:00",
	"RAUL LOYOLA",
	"CARMEN ISLA",
	"10112348-3",
	"ISAPRE"
  );
  addPatient(
	traumatologia,
	"10:30",
	"ANTONIO LARENAS",
	"PABLO LOAYZA",
	"13453234-1",
	"ISAPRE"
  );
  addPatient(
	traumatologia,
	"12:00",
	"MATIAS ARAVENA",
	"SUSANA POBLETE",
	"14345656-6",
	"FONASA"
  );
  tablePatientInformationGenerator(traumatologia, "traumatology");
  
  function timeSortTable(array) {
	array.sort(function (a, b) {
	  if (a.hora > b.hora) {
		return 1;
	  }
	  if (a.hora < b.hora) {
		return -1;
	  }
	  if (a.paciente > b.paciente) {
		return 1;
	  }
	  if (a.paciente < b.paciente) {
		return -1;
	  }
	  return 0;
	});
  }
  timeSortTable(traumatologia);
  tablePatientInformationGenerator(traumatologia, "traumatology");
  patientAttendanceInformation(traumatologia, "traumatology");
  
  // PUNTO2
  function removeFirstAndLastPatient(array) {
	array.shift();
	array.pop();
  }
  removeFirstAndLastPatient(radiologia);
  tablePatientInformationGenerator(radiologia, "radiology");
  patientAttendanceInformation(radiologia, "radiology");
  
  // PUNTO3
  function separator(array, htmlTarget, separator) {
	let patientsResult = ``;
  
	for (let i = 0; i < array.length; i++) {
	  patientsResult += `
			${array[i].hora} ${separator}
			${array[i].especialista} ${separator}
			${array[i].paciente} ${separator}
			${array[i].rut} ${separator}
			${array[i].prevision}</br>
			`;
	}
	document.getElementById(
	  `patient_attendance_information_${htmlTarget}_separator`
	).innerHTML = patientsResult;
  }
  separator(dental, "dental", "-");
  
  // PUNTO4
  
  let fullAttendanceList = radiologia.concat(traumatologia).concat(dental);
  
  function fullAttendancePatientList(pacientes) {
	let genericEmptyString = "";
	for (let i = 0; i < pacientes.length; i++) {
	  genericEmptyString += `${pacientes[i].paciente} </br>`;
	}
	document.getElementById("patient_attendance_list_full").innerHTML =
	  genericEmptyString;
  }
 
  fullAttendancePatientList(fullAttendanceList);
  
  //PUnto5
  let isaprePatientsFilter = dental.filter(function (paciente) {
	return paciente.prevision == "ISAPRE";
  });
  
  function isaprePatients(pacientes, htmlTarget) {
	let genericEmptyString = "";
	for (let i = 0; i < pacientes.length; i++) {
	  genericEmptyString += `${pacientes[i].paciente} - ${pacientes[i].prevision}</br>`;
	}
	document.getElementById(
	  `patient_attendance_list_isapre_${htmlTarget}`
	).innerHTML = genericEmptyString;
  }

  isaprePatients(isaprePatientsFilter, "dental");
  //PUNTO6
  let fonasaPatientsFilter = traumatologia.filter(function (paciente) {
	return paciente.prevision == "FONASA";
  });
  
  isaprePatients(fonasaPatientsFilter, "traumatology");
  