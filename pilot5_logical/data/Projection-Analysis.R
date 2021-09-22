##------------------------------------ Categorical Data Analysis ----------------------------------

if (!require(vcd)) {install.packages("vcd"); require(vcd)}          ## for visualizing categorical data
if (!require(vcdExtra)) {install.packages("vcdExtra"); require(vcdExtra)}
if (!require(epitools)) {install.packages("epitools"); require(epitools)}
if (!require(coin)) {install.packages("coin"); require(coin)}                    ## permutation tests
library(gtools)
library(plyr)
library(effects)

data <- read.csv("proviso2020_pilot5_for R.csv", sep=",", header=T) # import


str(data)
View(data)

#making stuff factors
data$exp <- factor(data$exp)
data$id <- factor(data$id)
data$condition <- factor(data$condition) 
data$question <- factor(data$question) 
data$item <- factor(data$item) 

levels(data$condition)

# relevel, distractor on the left
data$condition <- relevel(data$condition, ref = "Distractor")
levels(data$condition)

## critical
table <- table(data$resp_coded, data$condition)
table #correct!
summary(table) #p is tiny

prop.table(table) # relative frequency
prop.table(table,2) ## conditional relative frequencies (conditional on age group)

#some simple chi-sq tests:
chisq.test(data$resp_coded, data$condition, correct=FALSE) #condition: significant

#alternatively
library(gmodels)
CrossTable(data$resp_coded, data$condition, fisher=TRUE, chisq=TRUE, expected=TRUE, sresid=TRUE, format="SPSS")

## make a plot
library(ggplot2)
library(Hmisc)



#simpler version for readability
ggplot(data=data, 
       mapping=aes(x=condition, y=resp_coded, fill = condition)) +
#  facet_wrap(~age_group,ncol=3)+  
#  labs(x="Environment: Position of the Trigger", y="Percentage of Yes Responses") + 
  theme_bw() + 
  scale_fill_manual(values = c("#56B4E9", "#D55E00", "#FFCC33")) +
  # scale_fill_grey( start = 0.2, end = 0.8, na.value = "red" ) + 
  theme(strip.text.x = element_text(size = 12, face="bold", colour = "black"), #facet_wrap label
        axis.title.x=element_blank(), axis.text.x = element_text(size=10, face="bold", colour = "black"),  #x-axis label
        axis.title.y=element_blank(), axis.text.y = element_text(size=10, face="bold", colour = "black")   #y-axis label
        )+
  theme(legend.position = "none") +  #no legend
#  ggtitle("Percentage of Yes Responses Per Age Group") +
  stat_summary(fun.data=mean_sdl, geom="bar",  na.rm = TRUE, position=position_dodge(width=0.95)) + 
  stat_summary(fun.data=mean_cl_boot, geom="errorbar",  na.rm = TRUE, position=position_dodge(width=0.95), width=0.3)


## 2021-06-08: code below hasn't been modified for this study; change later
## Logit Regression 
library(lmerTest)
if (!require("pscl")) {install.packages("pscl"); require("pscl")}   ## R2 measures for logistic regression
if (!require("optimx")) {install.packages("optimx"); require("optimx")}
require("reshape")
require("ggplot2")
require("emmeans")


contrasts(data$environment) <- c(1,0)
contrasts(data$environment) 

contrasts(data$age_group) <- cbind( c(-1, 0.5,0.5), c(0,-1,1))
contrasts(data$age_group) 


## logistic regression model 
summary(glm(yes_resp ~ environment, family = "binomial", data = data))
summary(glm(yes_resp ~ age_group, family = "binomial", data = data))

summary(glm(yes_resp ~ environment+age_group, family = "binomial", data = data))

data_glm_both = glm(yes_resp ~ environment+age_group, family = "binomial", data = data)

plot(allEffects(data_glm_both), 
     multiline = TRUE, 
     type = "response",
     main = "Effects Plot", 
     ylab = "Response", ylim=c(0.5,1.0) )

coef(data_glm_both)
confint(data_glm_both)

anova(data_glm_both, test = "Chisq")

# We can also see this from a model comparison
data_glm_base = glm(yes_resp ~ 1, family = "binomial", data = data) # Construct a base model, 1 indicates intercept
summary(data_glm_base) #overall above chance, of course

anova(data_glm_base, test = "Chisq")
anova(data_glm_base, data_glm_both, test = "Chisq") # Compare the base model to the model with predictors
#significant improvement

##### mixed effect logistic regression model ####
# including participant.ID leads to really odd effects plots...

data_glmer_env = glmer(yes_resp ~ environment + (1|participant.ID) + (1|item) + (1|list), 
                   control = glmerControl(optimizer = c("optimx"), optCtrl = list(method = "nlminb")),
                   family = "binomial", data = data)
summary(data_glmer_env)


data_glmer_age = glmer(yes_resp ~ age_group + (1|participant.ID) +  (1|item) + (1|list), 
                          control = glmerControl(optimizer = c("optimx"), optCtrl = list(method = "nlminb")),
                          family = "binomial", data = data)
summary(data_glmer_age)

data_glmer_both_1 = glmer(yes_resp ~ environment+age_group + (1|participant.ID),
                        control = glmerControl(optimizer = c("optimx"), optCtrl = list(method = "nlminb")),
                        family = "binomial", data = data)
summary(data_glmer_both_1)

data_glmer_both_2 = glmer(yes_resp ~ environment+age_group + (1|item),
                          control = glmerControl(optimizer = c("optimx"), optCtrl = list(method = "nlminb")),
                          family = "binomial", data = data)
summary(data_glmer_both_2)

data_glmer_both_3 = glmer(yes_resp ~ environment+age_group + (1|list),
                        control = glmerControl(optimizer = c("optimx"), optCtrl = list(method = "nlminb")),
                        family = "binomial", data = data)
summary(data_glmer_both_3)

data_glmer_both_4 = glmer(yes_resp ~ environment+age_group + (1|item) + (1|list),
                          control = glmerControl(optimizer = c("optimx"), optCtrl = list(method = "nlminb")),
                          family = "binomial", data = data)
summary(data_glmer_both_4)

data_glmer_both = glmer(yes_resp ~ environment+age_group + (1|participant.ID) +  (1|item) + (1|list),
                          control = glmerControl(optimizer = c("optimx"), optCtrl = list(method = "nlminb")),
                          family = "binomial", data = data)
summary(data_glmer_both)


plot(allEffects(data_glmer_both), 
     type = "response",
     main = "Effects Plot", 
     ylab = "Response", ylim=c(0.5,1.0) )


require(MASS)
coef(data_glmer_both)
confint(data_glmer_both)


save.image(file = "Projection_Analysis.RData")
