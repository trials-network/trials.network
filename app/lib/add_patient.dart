import 'package:flutter/material.dart';

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

  String gender;
  String ethnicity;

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
                      TextFormField(
                          decoration: const InputDecoration(labelText: 'Name'),
                          validator: (value) {
                            if (value.isEmpty) {
                              return 'Please enter the patient\'s name';
                            }
                            return null;
                          }),
                      SizedBox(height: 10),
                      TextFormField(
                          decoration:
                              const InputDecoration(labelText: 'Patient ID'),
                          validator: (value) {
                            if (value.isEmpty) {
                              return 'Please enter the patient\'s ID';
                            }
                            return null;
                          }),
                      SizedBox(height: 30),
                      Text('Gender'),
                      DropdownButtonFormField(
                        value: gender,
                        hint: const Text('Select'),
                        onChanged: (value) {
                          setState(() {
                            gender = value;
                          });
                        },
                        items: GENDERS
                            .map<DropdownMenuItem<String>>((String value) {
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
                      ),
                      SizedBox(height: 30),
                      Text('Ethnicity'),
                      DropdownButtonFormField(
                        value: ethnicity,
                        hint: const Text('Select'),
                        onChanged: (value) {
                          setState(() {
                            ethnicity = value;
                          });
                        },
                        items: ETHNICITIES
                            .map<DropdownMenuItem<String>>((String value) {
                          return DropdownMenuItem<String>(
                              value: value, child: Text(value));
                        }).toList(),
                        validator: (value) {
                          if (value == null) {
                            return 'Please select ethnicity';
                          }
                          return null;
                        },
                        autovalidate: ethnicity != null,
                      ),
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
                                      widget.onNext();
                                    }
                                  }))
                        ],
                      )
                    ]))));
  }
}
