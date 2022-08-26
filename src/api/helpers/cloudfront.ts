import CF from 'aws-sdk/clients/cloudfront';

let cf = new CF();
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
  const params: CF.CreateInvalidationRequest = {
    DistributionId: distributionId,
    InvalidationBatch: {
      CallerReference: 'scraper',
      Paths: {
        Quantity: 1,
        Items: [path],
      },
    },
  };

  await cf.createInvalidation(params).promise();
};
