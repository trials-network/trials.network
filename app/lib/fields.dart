import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class DateField extends FormField<DateTime> {
  DateField(
      {FormFieldSetter<DateTime> onSaved,
      FormFieldValidator<DateTime> validator,
      DateTime initialValue,
      bool autovalidate = false})
      : super(
            onSaved: onSaved,
            validator: validator,
            initialValue: initialValue,
            autovalidate: autovalidate,
            builder: (FormFieldState<DateTime> state) {
              return RaisedButton(
                child: Text(state.value == null
                    ? 'Select'
                    : DateFormat('yyyy-MM-dd').format(state.value)),
                onPressed: () async {
                  DateTime date = await showDatePicker(
                      context: state.context,
                      initialDate: DateTime.now(),
                      firstDate: DateTime(2019),
                      lastDate: DateTime.now());
                  if (date != null) {
                    state.didChange(date);
                  }
                },
              );
            });
}
