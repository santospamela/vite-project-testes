import Quill from 'quill';
import QuillBetterTable from 'quill-better-table';
import 'quill-better-table/dist/quill-better-table.css';

// Verifique se o módulo já foi registrado antes de registrá-lo
if (!Quill.imports['modules/better-table']) {
  Quill.register({
    'modules/better-table': QuillBetterTable,
  }, true);
}

export default Quill;