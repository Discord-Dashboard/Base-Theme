'use client';

import FeaturedSection from './FeatureComponent';
import GjsEditor from '@grapesjs/react';
import grapesjs, { Editor } from 'grapesjs';
import grapesjsBlocksFlexbox from 'grapesjs-blocks-flexbox';
import grapesjsCustomCode from 'grapesjs-custom-code';
import grapesjsScriptEditor from 'grapesjs-script-editor';
import grapesjsTailwind from 'grapesjs-tailwind';
import { useRef } from 'react';

export default function GrapeEditor() {
  const editorRef = useRef<Editor | null>(null);

  const onEditor = (editor: Editor) => {
    editorRef.current = editor;
    FeaturedSection(editor);
  };

  const escapeName = (name) =>
    `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, '-');

  const handleSave = () => {
    const editor = editorRef.current;
    if (editor) {
      const html = editor.getHtml();
      const css = editor.getCss();
      console.log('HTML:', html);
      console.log('CSS:', css);
    }
  };

  return (
    <>
      <GjsEditor
        grapesjs={grapesjs}
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={{
          height: '90vh',
          storageManager: false,
        }}
        onEditor={onEditor}
        plugins={[grapesjsBlocksFlexbox, grapesjsCustomCode, grapesjsTailwind]}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );
}
