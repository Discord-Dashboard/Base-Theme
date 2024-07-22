'use client';

import FeaturedSection from './FeatureComponent';
import useWindowDimensions from './useWindowDimenstions';
import GjsEditor from '@grapesjs/react';
import grapesjs, { Editor } from 'grapesjs';
import grapesjsBlocksFlexbox from 'grapesjs-blocks-flexbox';
import grapesjsCustomCode from 'grapesjs-custom-code';
import grapesjsScriptEditor from 'grapesjs-script-editor';
import grapesjsTailwind from 'grapesjs-tailwind';
import { useRef } from 'react';

export default function GrapeEditor() {
  const editorRef = useRef<Editor | null>(null);
  //@ts-ignore
  const [{ width }, didChange] = useWindowDimensions();

  if (width < 1000) {
    return (
      <>
        <code>
          Displaying the content of <strong>dnd.too_small_window.dbd</strong>
        </code>

        <br />
        <br />

        <hr />

        <br />

        <a>
          <i>dnd.too_small_window.dbd</i>
        </a>

        <br />
        <br />

        <p>
          <i>1.</i> LET! PAGE_WIDTH point
          pages.dnd.GrapeEditor.window.dimensions.width;
          <br />
          <i>2.</i> LET! GrapeEditor mean pages.dnd.GrapeEditor;
          <br />
          <i>3.</i> LET! pass provide pages.dnd.end_content;
        </p>

        <p>
          <i>4.</i>
        </p>

        <p>
          <i>5.</i> EXEC! PAGE_WIDTH {'>'}= 1000px then pass otherwise
          *@descf[next]!
          <br />
          <i>6.</i> DESCF! In order to assure you the best User Experience, we
          require you to use a slightly bigger window and/or screen.
        </p>

        <p>
          <i>7.</i>
        </p>

        <p>
          <i>8.</i> EXEC! PAGE_WIDTH {'<'} 1000px implies {'{'} not GrapeEditor
          and *@descf[next]! {'}'}
          <br />
          <i>9.</i> DESCF! The ~GrapeEditor~ won't be displayed on the smaller
          windows.
        </p>

        <p>
          <i>10.</i>
        </p>

        <p>
          <i>11.</i> TEXT! We assure you, it's only a limit affecting you - the
          Dashboard Administrator. No other user won't ever see this on your
          built page.
        </p>

        <br />

        <hr />

        <br />

        <code>
          Do you wish to execute with the content shown above?<i>(yes/no):</i>{' '}
          <strong>
            <i>y</i>
          </strong>
        </code>

        <br />

        <code>
          Executing <strong>dnd.too_small_window.dbd</strong>...
        </code>

        <br />

        <code>
          Successfully executed: <strong>dnd.too_small_window.dbd</strong> in{' '}
          <strong>0.0001ms</strong>
        </code>

        <br />
        <br />
        <br />

        <code>
          <strong>Result:</strong> <br /> Use a tablet or PC, mf.
        </code>
      </>
    );
  }

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
      {didChange && (
        <a>
          Please DO NOT RESIZE THE WINDOW, which WILL result in a permanent
          unsaved DATA LOSS if the window is resized to {'<'} 1000px.
        </a>
      )}
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
