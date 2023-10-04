import React from 'react';
import {
  Container,
  Typography,
  Divider,
} from '@material-ui/core';
import { Route, useLocation } from 'react-router-dom';
import EternalReturn from '../pdf/Eternal_Return.pdf';
import ThinLine from '../pdf/Thin_Line.pdf';
import RequiemForTheBrigadierGeneral from '../pdf/Requiem_for_the_Brigadier_General.pdf';
import GeraltOfRivia from '../pdf/Geralt_of_Rivia.pdf';
import FinalCatch from '../pdf/Final_Catch.pdf';
import Spoiler from '../Components/Spoiler';
import PDFLink from '../Components/PDFLink';

/**
 * This section serves as the site's homepage.
 */
const Guitar = () => {
  const currentRoute = useLocation();
  return (
    <Container maxWidth="sm">
      <Typography variant="h2">Guitar</Typography>
      <Typography variant="body1">
      I occasionally arrange music for classical guitar. Anything good enough to publicize will be added here.
      </Typography>
      <Divider />
      <Typography variant="h3">
        <PDFLink to={EternalReturn}>Eternal Return</PDFLink>
      </Typography>
      <Typography variant="body1">
        <strong>This is not my arrangement</strong>
; it&apos;s a transcription of an arrangement by Gaspar Camarillo.
      Please
        {' '}
        <a target="blank" href="https://www.youtube.com/watch?v=o2qrcAFzrJo">watch him play it on YouTube.</a>
      </Typography>
      <Typography variant="body1">
The main menu theme (or at least the first half of it) from
        {' '}
        <em>Dragon&apos;s Dogma: Dark Arisen</em>
.
      </Typography>
      <Divider />
      <Route path="/guitar/spoilers/totk" exact>
        <Spoiler
          spoils="The Legend of Zelda: Tears of the Kingdom"
          back={currentRoute}
        >
          <PDFLink to={FinalCatch}>
        Final Catch
          </PDFLink>
        </Spoiler>
      </Route>
      <Typography variant="h3">
        <a href="/guitar/spoilers/totk">
SPOILER from
          {' '}
          <em>The Legend of Zelda: Tears of the Kingdom</em>
        </a>
      </Typography>
      <Typography variant="body1">
I&apos;m not sure if this has an official title yet.
        {' '}
        <strong>
  The title of the song may spoil you.
        </strong>
      </Typography>
      <Divider />

      <Typography variant="h3">
        <PDFLink to={ThinLine}>Thin Line</PDFLink>
      </Typography>
      <Typography variant="body1">
From the soundtrack of
        {' '}
        <em>Destiny 2: Forsaken</em>
.
      </Typography>
      <Divider />
      <Typography variant="h3">
        <PDFLink to={RequiemForTheBrigadierGeneral}>Requiem for the Brigadier General</PDFLink>
      </Typography>
      <Typography variant="body1">
      From
        {' '}
        <em>Fullmetal Alchemist: Brotherhood</em>
.
      </Typography>
      <Divider />
      <Typography variant="h3">
        <PDFLink to={GeraltOfRivia}>Geralt of Rivia (Netflix)</PDFLink>
      </Typography>
      <Typography variant="body1">
      Not the version from
        {' '}
        <em>The Witcher III</em>
, but from the Netflix series.
      </Typography>
    </Container>
  );
};

export default Guitar;
