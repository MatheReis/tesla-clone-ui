import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';


const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model Y',
            'Model 3',
            'Model S',
            'Model X',
            'Solar Panels',
            'Solar Roof',
            'Accessories',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="View Inventory"
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  )
}

export default Page