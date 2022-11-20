import {
  CloudFrontClient as CF,
  CreateInvalidationCommand,
  CreateInvalidationRequest,
} from '@aws-sdk/client-cloudfront';

let cf = new CF({});
export const setCF = (region: string) => {
  cf = new CF({ region });
};

export const invalidateCloudfrontPath = async ({
  path,
  distributionId,
}: {
  path: string;
  distributionId: string;
}) => {
  const params: CreateInvalidationRequest = {
    DistributionId: distributionId,
    InvalidationBatch: {
      CallerReference: 'scraper',
      Paths: {
        Quantity: 1,
        Items: [path],
      },
    },
  };

  await cf.send(new CreateInvalidationCommand(params));
};
