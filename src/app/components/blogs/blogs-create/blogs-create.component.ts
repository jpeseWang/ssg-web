import { Component, OnDestroy, Inject } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blogs-create',
  templateUrl: './blogs-create.component.html',
  styleUrls: ['./blogs-create.component.css'],
})
export class BlogsCreateComponent implements OnDestroy {
  editor = new Editor({
    extensions: [StarterKit],
  });
  value = '<p>Hello, Tiptap!</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
