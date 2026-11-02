import CommonReviewsCta from "../common/CommonReviewsCta";

export const StrapiReviewsCta = ({ data }) => {
  if (!data) return null;

  return (
    <CommonReviewsCta
      ratingValue={data?.ratingValue}
      ratingLabel={data?.ratingLabel}
      reviewsCount={data?.reviewsCount}
      reviewsCountLabel={data?.reviewsCountLabel}
      reviews={data?.reviews || []}
      ctaTitle={data?.ctaTitle}
      ctaOrangeText={data?.ctaOrangeText}
      ctaPara={data?.ctaPara}
      ctaButtonLabel={data?.ctaButtonLabel}
      ctaButtonUrl={data?.ctaButtonUrl}
      ctaImage={data?.ctaImage}
      ctaImageAlt={data?.ctaImageAlt}
    />
  );
};

export default StrapiReviewsCta;
