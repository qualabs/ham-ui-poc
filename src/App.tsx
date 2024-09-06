import { useState } from "react";
import "./App.css";
import HamDisplay from "./components/HamDisplay/HamDisplay";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SelectedTrackProvider } from "./context/TrackSelectedContext";
import { PresentationProvider } from "./context/PresentationContext";
import Header from "./components/Header/Header";

const theme = createTheme({});

export default function App() {
  const [manifest, setManifest] = useState<
    string | null
  >(`<?xml version="1.0" encoding="utf-8"?>
<MPD
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="urn:mpeg:dash:schema:mpd:2011"
  xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
  type="static"
  mediaPresentationDuration="PT12M14S"
  minBufferTime="PT10S"
  profiles="urn:mpeg:dash:profile:isoff-on-demand:2011">
  <Period
    duration="PT12M14S">
    <AdaptationSet
      id="1"
      group="1"
      contentType="audio"
      lang="en"
      minBandwidth="64349"
      maxBandwidth="128407"
      segmentAlignment="true"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      audioSamplingRate="48000"
      mimeType="audio/mp4"
      codecs="mp4a.40.2"
      startWithSAP="1">
      <AudioChannelConfiguration
        schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011"
        value="2">
      </AudioChannelConfiguration>
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
      <Representation
        id="audio_eng=64349"
        bandwidth="64349">
        <BaseURL>tears-of-steel-aac-64k.cmfa</BaseURL>
        <SegmentBase
          timescale="48000"
          indexRangeExact="true"
          indexRange="704-2211">
          <Initialization
            range="0-703" />
        </SegmentBase>
      </Representation>
      <Representation
        id="audio_eng=128407"
        bandwidth="128407">
        <BaseURL>tears-of-steel-aac-128k.cmfa</BaseURL>
        <SegmentBase
          timescale="48000"
          indexRangeExact="true"
          indexRange="704-2211">
          <Initialization
            range="0-703" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet
      id="2"
      group="3"
      contentType="text"
      lang="en"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      mimeType="application/mp4"
      codecs="wvtt"
      startWithSAP="1">
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="subtitle" />
      <Representation
        id="textstream_eng=1000"
        bandwidth="1000">
        <BaseURL>tears-of-steel-en.cmft</BaseURL>
        <SegmentBase
          timescale="1000"
          indexRangeExact="true"
          indexRange="607-1778">
          <Initialization
            range="0-606" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet
      id="4"
      group="3"
      contentType="text"
      lang="es"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      mimeType="application/mp4"
      codecs="wvtt"
      startWithSAP="1">
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="subtitle" />
      <Representation
        id="textstream_spa=1000"
        bandwidth="1000">
        <BaseURL>tears-of-steel-es.cmft</BaseURL>
        <SegmentBase
          timescale="1000"
          indexRangeExact="true"
          indexRange="607-1778">
          <Initialization
            range="0-606" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet
      id="12"
      group="2"
      contentType="video"
      lang="en"
      par="56:25"
      minBandwidth="1032000"
      maxBandwidth="1600000"
      maxWidth="3360"
      maxHeight="1500"
      segmentAlignment="true"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      sar="1:1"
      frameRate="24"
      mimeType="video/mp4"
      codecs="hev1.1.6.H150.90"
      startWithSAP="1">
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
      <Representation
        id="video_eng=1032000"
        bandwidth="1032000"
        width="1680"
        height="750"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1100k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1250000"
        bandwidth="1250000"
        width="2576"
        height="1150"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1500k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1600000"
        bandwidth="1600000"
        width="3360"
        height="1500"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-2200k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet
      id="12"
      group="2"
      contentType="video"
      lang="en"
      par="56:25"
      minBandwidth="1032000"
      maxBandwidth="1600000"
      maxWidth="3360"
      maxHeight="1500"
      segmentAlignment="true"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      sar="1:1"
      frameRate="24"
      mimeType="video/mp4"
      codecs="hev1.1.6.H150.90"
      startWithSAP="1">
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
      <Representation
        id="video_eng=1032000"
        bandwidth="1032000"
        width="1680"
        height="750"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1100k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1250000"
        bandwidth="1250000"
        width="2576"
        height="1150"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1500k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1600000"
        bandwidth="1600000"
        width="3360"
        height="1500"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-2200k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet
      id="12"
      group="2"
      contentType="video"
      lang="en"
      par="56:25"
      minBandwidth="1032000"
      maxBandwidth="1600000"
      maxWidth="3360"
      maxHeight="1500"
      segmentAlignment="true"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      sar="1:1"
      frameRate="24"
      mimeType="video/mp4"
      codecs="hev1.1.6.H150.90"
      startWithSAP="1">
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
      <Representation
        id="video_eng=1032000"
        bandwidth="1032000"
        width="1680"
        height="750"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1100k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1250000"
        bandwidth="1250000"
        width="2576"
        height="1150"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1500k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1600000"
        bandwidth="1600000"
        width="3360"
        height="1500"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-2200k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet
      id="12"
      group="2"
      contentType="video"
      lang="en"
      par="56:25"
      minBandwidth="1032000"
      maxBandwidth="1600000"
      maxWidth="3360"
      maxHeight="1500"
      segmentAlignment="true"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      sar="1:1"
      frameRate="24"
      mimeType="video/mp4"
      codecs="hev1.1.6.H150.90"
      startWithSAP="1">
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
      <Representation
        id="video_eng=1032000"
        bandwidth="1032000"
        width="1680"
        height="750"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1100k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1250000"
        bandwidth="1250000"
        width="2576"
        height="1150"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1500k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1600000"
        bandwidth="1600000"
        width="3360"
        height="1500"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-2200k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet
      id="12"
      group="2"
      contentType="video"
      lang="en"
      par="56:25"
      minBandwidth="1032000"
      maxBandwidth="1600000"
      maxWidth="3360"
      maxHeight="1500"
      segmentAlignment="true"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      sar="1:1"
      frameRate="24"
      mimeType="video/mp4"
      codecs="hev1.1.6.H150.90"
      startWithSAP="1">
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
      <Representation
        id="video_eng=1032000"
        bandwidth="1032000"
        width="1680"
        height="750"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1100k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1250000"
        bandwidth="1250000"
        width="2576"
        height="1150"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1500k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1600000"
        bandwidth="1600000"
        width="3360"
        height="1500"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-2200k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet
      id="12"
      group="2"
      contentType="video"
      lang="en"
      par="56:25"
      minBandwidth="1032000"
      maxBandwidth="1600000"
      maxWidth="3360"
      maxHeight="1500"
      segmentAlignment="true"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      sar="1:1"
      frameRate="24"
      mimeType="video/mp4"
      codecs="hev1.1.6.H150.90"
      startWithSAP="1">
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
      <Representation
        id="video_eng=1032000"
        bandwidth="1032000"
        width="1680"
        height="750"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1100k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1250000"
        bandwidth="1250000"
        width="2576"
        height="1150"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1500k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1600000"
        bandwidth="1600000"
        width="3360"
        height="1500"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-2200k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet
      id="12"
      group="2"
      contentType="video"
      lang="en"
      par="56:25"
      minBandwidth="1032000"
      maxBandwidth="1600000"
      maxWidth="3360"
      maxHeight="1500"
      segmentAlignment="true"
      subsegmentAlignment="true"
      subsegmentStartsWithSAP="1"
      sar="1:1"
      frameRate="24"
      mimeType="video/mp4"
      codecs="hev1.1.6.H150.90"
      startWithSAP="1">
      <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main" />
      <Representation
        id="video_eng=1032000"
        bandwidth="1032000"
        width="1680"
        height="750"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1100k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1250000"
        bandwidth="1250000"
        width="2576"
        height="1150"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-1500k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
      <Representation
        id="video_eng=1600000"
        bandwidth="1600000"
        width="3360"
        height="1500"
        scanType="progressive">
        <BaseURL>tears-of-steel-hev1-2200k.cmfv</BaseURL>
        <SegmentBase
          timescale="12288"
          indexRangeExact="true"
          indexRange="2901-4036">
          <Initialization
            range="0-2900" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    
  </Period>
</MPD>
<!-- Created with Unified Streaming Platform(version=1.9.4) -->`);

  const [fileName, setFileName] = useState<string>();
  const [protocol, setProtocol] = useState<string | null>("dash");

  return (
    <ThemeProvider theme={theme}>
      <Header
        manifest={manifest}
        isFullScreen={!!manifest}
        setManifest={setManifest}
        setProtocol={setProtocol}
        setFileName={setFileName}
      />

      {/*   {tabValue == 2 && <HLSPlayer></HLSPlayer>} */}
      {manifest !== null && protocol !== null && (
        <PresentationProvider>
          <SelectedTrackProvider>
            <HamDisplay
              manifest={manifest}
              protocol={protocol}
              fileName={fileName ?? "ham-converter"}
            ></HamDisplay>
          </SelectedTrackProvider>
        </PresentationProvider>
      )}
    </ThemeProvider>
  );
}
