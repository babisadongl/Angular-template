export const BaseActions = {
  REFRESH: {
    type: 'Refresh',
    label: '',
    icon: 'arrow-clockwise',
    class: '', //TODO: override btn class
  },
  ADD: {
    type: 'Add',
    label: 'Add',
    icon: 'plus-circle-fill',
    class: '',
  },
  EXPORT: {
    type: 'Export',
    label: 'Export',
    icon: 'dash-circle-fill',
    class: '',
  },
  CLOSE: {
    type: 'close',
    label: 'Close',
    icon: '',
    class: 'btn-accent-2',
  },
  SAVE: {
    type: 'save',
    label: 'Save',
    icon: '',
    class: 'btn-primary',
  },
  NEXT: {
    type: 'next',
    label: 'Next',
    icon: '',
    class: 'btn-primary',
  },
  PREVIOUS: {
    type: 'previous',
    label: 'Previous',
    icon: '',
    class: 'btn-primary',
  },

  SUBMIT: {
    type: 'submit',
    label: 'Submit',
    icon: '',
    class: 'btn-primary',
  },

  RESET: {
    type: 'reset',
    label: 'Reset',
    icon: '',
    class: 'btn-danger',
  },
};
