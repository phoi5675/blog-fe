// Copyright (c) 2025 phoi5675
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: "<p>Example Text</p>",
    // place the cursor in the editor after initialization
    autofocus: true,
    // make the text editable (default is true)
    editable: true,
    // prevent loading the default CSS (which isn't much anyway)
    injectCSS: true,
  });

  return <EditorContent editor={editor} />;
};

export default Editor;
