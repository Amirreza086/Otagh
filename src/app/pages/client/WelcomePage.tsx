import React from 'react';
import { Box, Button, Icon, Icons, Text, config, toRem } from 'folds';
import { Page, PageHero, PageHeroSection } from '../../components/page';
import CinnySVG from '../../../../public/res/svg/cinny.svg';

export function WelcomePage() {
  return (
    <Page>
      <Box
        grow="Yes"
        style={{ padding: config.space.S400, paddingBottom: config.space.S700 }}
        alignItems="Center"
        justifyContent="Center"
      >
        <PageHeroSection>
          <PageHero
            icon={<img width="70" height="70" src={CinnySVG} alt="bird Logo" />}
            title="Welcome to Bird of Resistance"
            subTitle={
              <span>
                Yet another messenger client application, For freedom of expression of the Resistance Front and the oppressed of the world
                <br></br>
                By Amirreza Eskandarzadeh.
              </span>
            }
          >
          </PageHero>
        </PageHeroSection>
      </Box>
    </Page>
  );
}
