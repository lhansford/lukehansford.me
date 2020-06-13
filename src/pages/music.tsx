import Page from "../components/Page/Page";

export default function Music() {
  return (
    <Page title="Music">
      <h2>Dallol</h2>
      <p>Experimental, computer based music.</p>
      <ul>
        <li>
          <a href="https://soundcloud.com/dallol">Soundcloud</a>
        </li>
        <li>
          <a target="_blank" href="files/dallol-sfx-pack-1.zip">
            SFX Pack 1
          </a>{" "}
          - 8 sound effects created using modular synth. These are used in the
          Klinify application and free for reuse elsewhere.
        </li>
      </ul>

      <h2>Trig</h2>
      <p>
        More beat driven work, for the most part made on modular synthesizers.
      </p>
      <ul>
        <li>
          <a href="https://www.youtube.com/channel/UCVV9_vidM2hGWTtiexBL0dw">
            Youtube
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/trigsound">Soundcloud</a>
        </li>
      </ul>
    </Page>
  );
}
