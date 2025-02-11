import Quill from 'quill';

var BlockEmbed = Quill.import('blots/block/embed');

// Define a classe TableEmbed para lidar com a tag <table>
class TableEmbed extends BlockEmbed {
  static blotName = 'table';
  static tagName = 'table';
}

// Registra a classe TableEmbed no Quill
Quill.register(TableEmbed);
