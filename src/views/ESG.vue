<template>
  <div>
    <v-row>
      <v-col cols="12" :lg="6" class="tw-min-h-[500px]">
        <div class="tw-flex tw-justify-evenly tw-flex-col tw-h-full tw-gap-y-3">
          <div>
            <h1 class="tw-text-3xl sm:tw-text-5xl tw-font-bold">
              What is ESG?
            </h1>
          </div>
          <div>
            <p class="sm:tw-text-xl">
              ESG is often conflated or used interchangeably with the term
              <b> “sustainable investing”</b>
              . We see sustainable investing as the umbrella and ESG as a data
              toolkit for identifying and informing our solutions.
            </p>
          </div>
          <div>
            <p class="sm:tw-text-xl">
              ESG data is most often categorized as “non-accounting” information
              because it captures components important for valuations that are
              not traditionally reported. The valuation of companies has become
              more complex, with a growing portion tied up in intangible assets.
              ESG metrics provide insights into these intangibles, such as brand
              value and reputation, by measuring decisions taken by company
              management that affect operational efficiency and future strategic
              directions.
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" :lg="6">
        <v-img
          class="sm:tw-min-h-[500px]"
          contain
          src="https://www.weya.com.tw/uploads/designitem/670e43845345a47bf9f80579e132a2ad.jpg"
        ></v-img>
      </v-col>

      <v-col cols="12" class="tw-mt-20 tw-mb-10">
        <h1 class="tw-text-3xl tw-font-bold tw-pb-[18px]">
          ESG Investing Trends
        </h1>
        <p>
          As ESG investing accelerates in demand, several key trends are
          emerging – from climate change to social unrest. The coronavirus
          pandemic, in particular, has intensified discussions about the
          interconnectedness of sustainability and the financial system. CFA
          Institute is leading the financial industry by producing valuable
          research, convening experts and practitioners for discussion, and
          setting standards to enable the mainstreaming of ESG investing.
        </p>
      </v-col>
      <v-col cols="12">
        <div>
          <h1 class="tw-text-3xl tw-font-bold tw-pb-[18px]">ESG Factors</h1>
          <p>
            There is no one exhaustive list of ESG examples. ESG factors are
            often interlinked, and it can be challenging to classify an ESG
            issue as only an environmental, social, or governance issue, as the
            table below shows. These ESG factors can often be measured (e.g.,
            what the employee turnover for a company is), but it can be
            difficult to assign them a monetary value (e.g., what the cost of
            employee turnover for a company is).
          </p>

          <v-row class="tw-mt-10 tw-mb-10">
            <v-col lg="4" md="6" cols="12">
              <ESGCard :list="list1">
                <template v-slot:title> Environmental </template>
                <template v-slot:subTitle>
                  Conservation of the natural world
                </template>
              </ESGCard>
            </v-col>
            <v-col lg="4" md="6" cols="12">
              <ESGCard :list="list2">
                <template v-slot:title>Social </template>
                <template v-slot:subTitle>
                  Consideration of people & relationships
                </template>
              </ESGCard>
            </v-col>
            <v-col lg="4" md="6" cols="12">
              <ESGCard :list="list3">
                <template v-slot:title> Governance</template>
                <template v-slot:subTitle>
                  Standards for running a company
                </template>
              </ESGCard>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ESGCard from "@/components/ESGCard";
export default {
  name: "ESG",
  components: { ESGCard },
  data() {
    return {
      list1: [
        "Climate change and carbon emissions",
        "Air and water pollution",
        "Biodiversity",
        "Deforestation",
        "Energy efficiency",
        "Waste management",
        "Water scarcity",
      ],
      list2: [
        "Customer satisfaction",
        "Data protection and privacy",
        "Gender and diversity",
        "Employee engagement",
        "Community relations",
        "Human rights",
        "Labor standards",
      ],
      list3: [
        "Board composition",
        "Audit committee structure",
        "Bribery and corruption",
        "Executive compensation",
        "Lobbying",
        "Political contributions",
        "Whistleblower schemes",
      ],
    };
  },
};
</script>

<style scoped></style>
