import { useForm } from "react-hook-form";
import { FaMugHot, FaTemperatureArrowDown } from "react-icons/fa6";
import { useUpdateMachine } from "./hooks/useUpdateMachine";
import { REQUIRED_FIELD_RULE } from "../../utils/constants";
import Button from "../../ui/components/Button";
import Heading from "../../ui/components/Heading";
import Input from "../../ui/components/Input";
import {
    Form,
    FormRow,
    InputWrapper,
    Label,
    Error,
} from "./CreateEditFormStyle";

function EditMachineInfoForm({
    machine: { id, name, coldTemp, hotTemp, stockThreshold },
    onCloseModal,
}) {
    const { updateMachine, isUpdating } = useUpdateMachine();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm({
        defaultValues: {
            id,
            name,
            coldTemp,
            hotTemp,
            stockThreshold,
        },
    });

    const stockThresholdValue = watch("stockThreshold");

    function onSubmit(data) {
        updateMachine(data, {
            onSuccess: () => {
                reset();
                onCloseModal?.();
            },
        });
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Heading as="h2">Edit Machine Configuration - {name}</Heading>

            <FormRow>
                <Label htmlFor="coldTemp">Cold Menu Temperature</Label>
                <InputWrapper>
                    <FaTemperatureArrowDown />
                    <Input
                        type="text"
                        size="small"
                        id="coldTemp"
                        disabled={isUpdating}
                        {...register("coldTemp", REQUIRED_FIELD_RULE)}
                    />
                    <span>celcius</span>
                </InputWrapper>
                {errors?.coldTemp?.message && (
                    <Error>{errors.coldTemp.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="hotTemp">Hot Menu Temperature</Label>
                <InputWrapper>
                    <FaMugHot />
                    <Input
                        type="text"
                        size="small"
                        id="hotTemp"
                        disabled={isUpdating}
                        {...register("hotTemp", REQUIRED_FIELD_RULE)}
                    />
                    <span>celcius</span>
                </InputWrapper>
                {errors?.hotTemp?.message && (
                    <Error>{errors.hotTemp.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="hotTemp">Stock Threshold</Label>
                <InputWrapper>
                    <Input
                        type="range"
                        id="stockThreshold"
                        disabled={isUpdating}
                        {...register("stockThreshold", REQUIRED_FIELD_RULE)}
                    />
                    <span>{stockThresholdValue}</span>
                </InputWrapper>
                {errors?.stockThreshold?.message && (
                    <Error>{errors.stockThreshold.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Button
                    variation="normal"
                    type="reset"
                    onClick={() => onCloseModal?.()}
                >
                    Cancel
                </Button>
                <Button disabled={isUpdating}>Update Machine</Button>
            </FormRow>
        </Form>
    );
}

export default EditMachineInfoForm;
