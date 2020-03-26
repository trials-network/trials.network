import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import './fields.dart';

class AddPatient extends StatefulWidget {
  @override
  _AddPatientState createState() {
    return _AddPatientState();
  }
}

class _AddPatientState extends State<AddPatient> {
  int screenIndex = 0;

  @override
  Widget build(BuildContext context) {
    switch (screenIndex) {
      case 0:
        return NameScreen(onNext: () {
          setState(() {
            screenIndex = 1;
          });
        });
    }
    throw 'Invalid screen index';
  }
}

class NameScreen extends StatefulWidget {
  final Function onNext;

  NameScreen({this.onNext});

  @override
  _NameScreenState createState() {
    return _NameScreenState();
  }
}

const ETHNICITIES = <String>['Asian', 'Black', 'Mixed', 'Other', 'White'];
const GENDERS = <String>['Female', 'Male', 'Other'];

class _NameScreenState extends State<NameScreen> {
  final _formKey = GlobalKey<FormState>();

  String name, id;
  String gender, ethnicity;
  DateTime symptomStartDate, hospitalisationDate;

  Widget nameField() {
    return TextFormField(
      decoration: const InputDecoration(labelText: 'Name'),
      validator: (value) {
        if (value.isEmpty) {
          return 'Please enter the patient\'s name';
        }
        return null;
      },
      onSaved: (value) {
        name = value;
      },
    );
  }

  Widget idField() {
    return TextFormField(
      decoration: const InputDecoration(labelText: 'Patient ID'),
      validator: (value) {
        if (value.isEmpty) {
          return 'Please enter the patient\'s ID';
        }
        return null;
      },
      onSaved: (value) {
        id = value;
      },
    );
  }

  Widget genderField() {
    return Column(
      children: [
        Text('Gender'),
        SizedBox(
            width: 150,
            child: DropdownButtonFormField(
              value: gender,
              hint: const Text('Select'),
              onChanged: (value) {
                setState(() {
                  gender = value;
                });
              },
              items: GENDERS.map<DropdownMenuItem<String>>((String value) {
                return DropdownMenuItem<String>(
                    value: value, child: Text(value));
              }).toList(),
              validator: (value) {
                if (value == null) {
                  return 'Please select gender';
                }
                return null;
              },
              autovalidate: gender != null,
            ))
      ],
    );
  }

  Widget ethnicityField() {
    return Column(children: [
      Text('Ethnicity'),
      SizedBox(
          width: 150,
          child: DropdownButtonFormField(
            value: ethnicity,
            hint: const Text('Select'),
            onChanged: (value) {
              setState(() {
                ethnicity = value;
              });
            },
            items: ETHNICITIES.map<DropdownMenuItem<String>>((String value) {
              return DropdownMenuItem<String>(value: value, child: Text(value));
            }).toList(),
            validator: (value) {
              if (value == null) {
                return 'Please select ethnicity';
              }
              return null;
            },
            autovalidate: ethnicity != null,
          ))
    ]);
  }

// TODO - validate
  Widget symptomStartDateField(BuildContext context) {
    return Column(children: [
      Text('Symptom Start Date'),
      SizedBox(
        width: 150,
        child: RaisedButton(
          child: Text(symptomStartDate == null
              ? 'Select'
              : DateFormat('yyyy-MM-dd').format(symptomStartDate)),
          onPressed: () async {
            DateTime date = await showDatePicker(
                context: context,
                initialDate: DateTime.now(),
                firstDate: DateTime(2019),
                lastDate: DateTime.now());
            if (date != null) {
              setState(() {
                symptomStartDate = date;
              });
            }
          },
        ),
      )
    ]);
  }

// TODO - validate
  Widget hospitalisationDateField(BuildContext context) {
    return Column(children: [
      Text('Hospitalisaton Date'),
      SizedBox(
          width: 150,
          child: DateField(
            onSaved: (value) => this.hospitalisationDate = value,
            // validator: (value) => value == null ? 'Please select date' : null),
          ))
    ]);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        resizeToAvoidBottomPadding: false,
        appBar: AppBar(title: Text('New Patient')),
        body: Form(
            key: _formKey,
            child: Padding(
                padding: EdgeInsets.all(8),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      nameField(),
                      SizedBox(height: 10),
                      idField(),
                      SizedBox(height: 30),
                      Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: <Widget>[genderField(), ethnicityField()]),
                      SizedBox(height: 30),
                      Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: <Widget>[
                            symptomStartDateField(context),
                            hospitalisationDateField(context)
                          ]),
                      SizedBox(height: 30),
                      Row(
                        children: <Widget>[
                          Expanded(
                              child: RaisedButton(
                                  color: Colors.green[400],
                                  textColor: Colors.white,
                                  child: Text('Next',
                                      style: TextStyle(fontSize: 18.0)),
                                  onPressed: () {
                                    if (_formKey.currentState.validate()) {
                                      _formKey.currentState.save();
                                      print(name);
                                      print(this.hospitalisationDate);
                                      widget.onNext();
                                    }
                                  }))
                        ],
                      ),
                    ]))));
  }
}
